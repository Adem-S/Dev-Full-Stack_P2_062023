import { Component, Input, OnInit } from "@angular/core";
import { HeaderDetails } from "src/app/core/models/HeaderDetails";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() headerDetails!: HeaderDetails[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
