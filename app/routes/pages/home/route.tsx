import CreditService from './components/credit-service';
import Description from './components/description';
import FinanceIntro from './components/finance-intro';
import Hero from './components/hero';
import HomeService from './components/home-service';
import InvestService from './components/invest-service';
import LoanService from './components/loan-service';
import TransferService from './components/transfer-service';

export default function Home() {
  return (
    <div>
      <Hero />
      <Description />
      <HomeService />
      <TransferService />
      <LoanService />
      <CreditService />
      <InvestService />
      <FinanceIntro />
    </div>
  );
}
