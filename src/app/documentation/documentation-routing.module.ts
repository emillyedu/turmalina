import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation.component';

import { AgreementComponent } from './agreement/agreement.component';
import { BiddingComponent } from './bidding/bidding.component';
import { BudgetExpenditureComponent } from './budget-expenditure/budget-expenditure.component';
import { BudgetRevenueComponent } from './budget-revenue/budget-revenue.component';
import { ContractComponent } from './contract/contract.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { ExtraBudgetExpenditureComponent } from './extra-budget-expenditure/extra-budget-expenditure.component';
import { ExtraBudgetRevenueComponent } from './extra-budget-revenue/extra-budget-revenue.component';
import { HomeComponent } from './home/home.component';
import { PaymentDocumentComponent } from './payment-document/payment-document.component';
import { PlanningInstrumentComponent } from './planning-instrument/planning-instrument.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
  { path: '', component: DocumentationComponent, children:[
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'agreement', component: AgreementComponent },
    { path: 'bidding', component: BiddingComponent },
    { path: 'budgetExpenditure', component: BudgetExpenditureComponent },
    { path: 'budgetRevenue', component: BudgetRevenueComponent },
    { path: 'contract', component: ContractComponent },
    { path: 'employeeInformation', component: EmployeeInformationComponent },
    { path: 'extraBudgetExpenditure', component: ExtraBudgetExpenditureComponent },
    { path: 'extraBudgetRevenue', component: ExtraBudgetRevenueComponent },
    { path: 'home', component: HomeComponent },
    { path: 'paymentDocument', component: PaymentDocumentComponent },
    { path: 'planningInstrument', component: PlanningInstrumentComponent },
    { path: 'tutorial', component: TutorialComponent }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
