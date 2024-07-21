import Card from "../components/cards/card";
import TransactionCard from "../components/cards/transaction-card";

export default function Home() {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-6 mb-4">
            <Card
              cardIcon="/img/icons/unicons/cc-primary.png"
              cardValue="₹1,00,00,000"
              cardTitle="Success"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-6 mb-4">
            <Card
              cardIcon="/img/icons/unicons/chart-success.png"
              cardValue="₹1,00,00,000"
              cardTitle="Success"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-6 mb-4">
            <Card
              cardIcon="/img/icons/unicons/cc-primary.png"
              cardValue="₹1,00,00,000"
              cardTitle="Success"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-6 mb-4">
            <Card
              cardIcon="/img/icons/unicons/chart-success.png"
              cardValue="₹1,00,00,000"
              cardTitle="Success"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-6 mb-4">
            <Card
              cardIcon="/img/icons/unicons/cc-primary.png"
              cardValue="₹1,00,00,000"
              cardTitle="Success"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-6 mb-4">
            <Card
              cardIcon="/img/icons/unicons/chart-success.png"
              cardValue="₹1,00,00,000"
              cardTitle="Success"
            />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 order-2 mb-4">
      <TransactionCard title="Fixed Deposit" transactions={[{"txnIcon":"/img/icons/unicons/wallet.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/cc-success.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/cc-warning.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/cc-primary.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/chart-success.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/wallet-info.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"}]} />
      </div>
      <div className="col-md-6 col-lg-4 order-2 mb-4">
        <TransactionCard title="Fixed Investment Plan" transactions={[{"txnIcon":"/img/icons/unicons/wallet.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/cc-success.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/cc-warning.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/cc-primary.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/chart-success.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/wallet-info.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"}]} />
      </div>
      <div className="col-md-6 col-lg-4 order-2 mb-4">
      <TransactionCard title="BBPS" transactions={[{"txnIcon":"/img/icons/unicons/wallet.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/cc-success.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/cc-warning.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/cc-primary.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/chart-success.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"},{"txnIcon":"/img/icons/unicons/wallet-info.png", "txnAmt": 123456789, "txnTitle":"Initiated", "txnType":"Count"}]} />
      </div>
    </div>
  );
}
