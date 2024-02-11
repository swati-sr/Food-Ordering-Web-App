//Creating a Class Based Component
import { Component } from "react";

class Faq extends Component {
  constructor(props) {
    super(props);
    console.log("Parent-Constructor");
  }
  componentDidMount() {
    console.log("Parent-ComponentDidMount");
  }
  componentWillUnmount() {
    console.log("Parent-ComponentWillUnmount");
  }
  render() {
    console.log("Parent-Render");
    return (
      <div className="bg-[#fffcf2]">
        <div className="flex gap-10 m-4">
          <h5 className="text-[#ff6b35] font-extrabold">
            Few things to know...
          </h5>
          <ul className="mb-2">
            <li className="text-[#252422]">
              <h5 className="font-semibold">Do we support bulk orders?</h5>{" "}
              <p className="">
                In order to provide all customers with a great selection and to
                ensure on time delivery of your meal, we reserve the right to
                limit the quantities depending on supply.
              </p>
            </li>
            <li className="mt-5 text-[#252422]">
              <h5 className="font-semibold">Can you order in advance?</h5>
              <p className="">
                We currently do not support this functionality. All our orders
                are placed and executed on-demand.
              </p>
            </li>
            <li className="mt-5 text-[#252422]">
              <h5 className="font-semibold">
                Do we accept Sodexo, Ticket Restaurant etc.?
              </h5>
              <p className="">
                We do not accept Sodexo vouchers but we do accept Sodexo card.
                You can select the Sodexo card option while selecting payment
                options at the time of order
              </p>
            </li>
          </ul>
        </div>
        {/* <Outlet /> */}
      </div>
    );
  }
}

export default Faq;
