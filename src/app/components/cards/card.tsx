import Image from "next/image";

interface StatusCard {
    cardIcon: string;
    cardTitle: string;
    cardValue: string;
};

const Card = (props: StatusCard) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title d-flex align-items-start justify-content-between">
          <div className="avatar flex-shrink-0">
            <Image
              src={props.cardIcon}
              alt="chart"
              className="rounded"
              width={40}
              height={40}
            />
          </div>
          {/* <div className="dropdown">
            <button
              className="btn p-0"
              type="button"
              id="cardOpt3"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bx bx-dots-vertical-rounded"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                <a className="dropdown-item" href="javascript:void(0);">View More</a>
                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
              </div>
          </div> */}
        </div>
        <span className="fw-semibold d-block mb-1">{props.cardTitle}</span>
        <h3 className="card-title mb-2">{props.cardValue}</h3>
        {/* <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +72.80%</small> */}
      </div>
    </div>
  );
};

export default Card;
