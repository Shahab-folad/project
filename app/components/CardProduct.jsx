'use client'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


export function CardProduct(props) {
  return (
    <Card className="mt-6 w-72 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-2">
      <CardHeader color="blue-gray" className="relative h-56 content-center  shadow-none">
        <img
          src={props.img}
          alt="card-image"
          className=" lg:w-full xl:w-full md:w-full w-48 object-cover mx-auto "
        />
      </CardHeader>
      <CardBody className="bg-white mt-4">
        <h1 className="card-header">
            {props.title}
        </h1>
        <p className="card-p">
          {props.detail}
        
        </p>
      </CardBody>
      <CardFooter className="pt-4  flex justify-between items-center rounded-b-lg">
        <a  href={props.location}
          className="btn-more transition duration-300 px-6 py-2 shadow-md "
        >
          Read More
        </a>
        
      </CardFooter>
    </Card>
  );
}

export default CardProduct;
