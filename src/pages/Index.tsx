import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { ExpenseCategories } from "@/components/dashboard/ExpenseCategories";
import { GoalTracker } from "@/components/dashboard/GoalTracker";
import { BudgetAlerts } from "@/components/dashboard/BudgetAlerts";
import { PredictiveInsights } from "@/components/dashboard/PredictiveInsights";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        <MetricsGrid />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SpendingChart />
          <ExpenseCategories />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PredictiveInsights />
          </div>
          <div className="space-y-6">
            <GoalTracker />
            <BudgetAlerts />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;