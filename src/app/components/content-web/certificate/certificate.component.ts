import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {
  data: any;
  currentPage = 1;
  itemsPerPage = 3; 
  paginatedCertificates: any[] = [];
  totalPages: number = 0;

  constructor(private auth: AuthService) {
    this.auth.data$.subscribe((data) => {
      if (data) {
        this.data = this.auth.getDataCertificate;
        this.updatePagination();
      }
    });

    this.updateItemsPerPage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateItemsPerPage();
  }

  updateItemsPerPage(): void {
    const width = window.innerWidth;
    if (width < 640) {
      this.itemsPerPage = 1; 
    } else {
      this.itemsPerPage = 3; 
    }
    this.updatePagination();
  }

  updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedCertificates = this.data.certificates.slice(
      startIndex,
      endIndex
    );
    this.totalPages = Math.ceil(
      this.data.certificates.length / this.itemsPerPage
    );
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

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePagination();
  }
}
