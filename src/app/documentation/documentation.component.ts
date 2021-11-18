import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import menuData from 'src/assets/search/menuData.json';


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DocumentationComponent implements OnInit{
  title = "Open Web Technology";
  subtitle = "Technical call live coding challenge";

  userQuery = "";
  queryField = new FormControl();

  homeTotal = menuData[0].Name;
  home = menuData[1].Name;
  tutorial = menuData[2].Name;
  revenue = menuData[3].Name;
  budgetRevenue = menuData[4].Name;
  extraBudgetRevenue = menuData[5].Name;
  budget = menuData [6].Name;
  budgetExpenditure = menuData[7].Name;
  extraBudgetExpenditure = menuData[8].Name;
  paymentDocument = menuData[9].Name;
  contract = menuData[10].Name;
  planningInstrument = menuData[11].Name;
  bidding = menuData[12].Name;
  agreement = menuData[13].Name;
  employeeInformation = menuData[14].Name;

  find(userQuery: string, content: string){
      if(userQuery.length > 0){
          return content.includes(userQuery)
      }
      return true
  }

  ngOnInit(){}
  
}
