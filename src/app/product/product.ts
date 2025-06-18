import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  products: any[] = [];
  paginatedProducts: any[] = [];
  currentPage = 1;
  pageSize = 15;
  category: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category') || 'single-head';
      this.loadCSV();
    });
  }

  loadCSV() {
    const filePath = `assets/machines/${this.category}.csv`;
    console.log('Loading CSV file from:', filePath);

    this.http.get(filePath, { responseType: 'text' }).subscribe(
      (data) => {
        Papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: (result: Papa.ParseResult<any>) => {
            this.products = result.data;
            this.currentPage = 1;
            this.updatePagination();
          },
        });
      },
      (error) => {
        console.error('CSV file load error:', error);
        this.products = [];
        this.paginatedProducts = [];
      }
    );
  }

  get totalPages(): number {
    return Math.ceil(this.products.length / this.pageSize);
  }

  updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
}
