import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public SidebarService: SidebarService,
    private router: Router,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {}

  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.SidebarService.isExpanded;
  }

  signout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token")
  }
}
