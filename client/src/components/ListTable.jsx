import { Card, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Name", "Company Name", "Email", "Mobile Phone", "Recievables", "Date", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    company: "Manager",
    email: "john@gmail.com",
    mobile: "+251911234567",
    recievables: "20,000",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    company: "Developer",
    email: "alexa@gmail.com",
    mobile: "+251911234567",
    recievables: "15,000",
    date: "15/04/19",
  },
  {
    name: "Laurent Perrier",
    company: "Executive",
    email: "laurent@gmail.com",
    mobile: "+251911234567",
    recievables: "22,000",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    company: "Developer",
    email: "michael@gmail.com",
    mobile: "+251911234567",
    recievables: "18,000",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    company: "Manager",
    email: "richard@gmail.com",
    mobile: "+251911234567",
    recievables: "20,000",
    date: "04/10/21",
  },
];

function ListTable({ dataType }) {
    return (
      <div className="w-full">
        <div className="flex justify-between items-center px-4 py-3 sm:mx-10 sm:my-5">
          <Typography className="text-lg sm:text-xl font-semibold">
            All {dataType}
          </Typography>
  
         <Link to='/add-new-customer' className="bg-primary-color rounded-[5px] py-2 px-4 sm:px-5 text-white">+New</Link>
        </div>
  
        <Card className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-2 sm:p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, company, email, mobile, recievables, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-2 sm:p-4" : "p-2 sm:p-4 border-b border-blue-gray-50";
  
                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray">
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray">
                        {company}
                      </Typography>
                    </td>
                    {/* Conditionally hide certain columns on smaller screens */}
                    <td className={`hidden sm:table-cell ${classes}`}>
                      <Typography variant="small" color="blue-gray">
                        {email}
                      </Typography>
                    </td>
                    <td className={`hidden sm:table-cell ${classes}`}>
                      <Typography variant="small" color="blue-gray">
                        {mobile}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray">
                        {recievables}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray">
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        Edit
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    );
  }
  

export default ListTable;
