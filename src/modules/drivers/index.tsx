import DriverTable from "./driver-table";

const Drivers = () => {
  return (
    <div>
      <div>
        <h2>Drivers</h2>
        <p className="mb-4">Recent orders from your store</p>
      </div>
      <DriverTable />
    </div>
  );
};

export default Drivers;
