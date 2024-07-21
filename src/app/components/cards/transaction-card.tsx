import Image from "next/image";

interface Transaction {
  txnIcon: string;
  txnTitle: string;
  txnType: string;
  txnAmt: number;
}

interface TransactionType {
  title: string;
  transactions: Array<Transaction>;
}

const TransactionCard = (props: TransactionType) => {
  return (
    <div className="card h-100">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h5 className="card-title m-0 me-2">{props.title}</h5>
        {/* 
        <div className="dropdown">
            <button
                className="btn p-0"
                type="button"
                id="transactionID"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <i className="bx bx-dots-vertical-rounded"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
                <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
            </div>
        </div> 
        */}
      </div>
      <div className="card-body">
        <ul className="p-0 m-0">
          {props.transactions.map((txn, i) => (
            <li className="d-flex mb-4 pb-1" key={txn.txnTitle+'_'+i}>
              <div className="avatar flex-shrink-0 me-3">
                <Image
                  src={txn.txnIcon}
                  alt="Transaction"
                  className="rounded"
                  width={40}
                  height={40}
                />
              </div>
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  <small className="text-muted d-block mb-1">
                    {txn.txnTitle}
                  </small>
                  <h6 className="mb-0">{txn.txnType}</h6>
                </div>
                <div className="user-progress d-flex align-items-center gap-1">
                  <span className="text-muted">₹</span>
                  <h6 className="mb-0">{txn.txnAmt.toLocaleString("en-IN")}</h6>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionCard;
