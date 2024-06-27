"use client"
import Image from "next/image";
import Link from "next/link";
import Header from "src/components/Header/Header";
//import EmbedGraph from "src/components/embed_graph";
import embed_graph from "src/public/Card_France.png"
import { z } from "zod"
import { Button } from "src/components/ui/button";
import { useState, useEffect } from "react";
import { FileUploader, FileUploaderContent, FileUploaderItem, FileInput} from "src/components/ui/FileUploader";
import { Paperclip } from "lucide-react";
import { config } from "dotenv";
import { Checkbox } from "src/components/ui/checkbox";
import path from "path";
import StripeComponent  from "src/components/stripeComponent"
import { stripePromise } from "src/components/stripeComponent";
import { Elements } from "@stripe/react-stripe-js";

import { useRouter } from "next/navigation";
import {getUser} from "src/utils/supabase_queries"
import { Resend } from 'resend';
import Stripe from "stripe";
import { set } from "react-hook-form";


import {env} from "src/env"


const resend = new Resend(env.NEXT_PUBLIC_RESEND_API_KEY || "");

export default function Home() {

  const FileSvgDraw = () => {
    return (
      <>
        <svg
          className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span>
          &nbsp; or drag and drop
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          TXT dalle file format
        </p>
      </>
    );
  };

  const [upload, setUpload] = useState(false);
  const [payment, setPayment] = useState(false);
  const [files, setFiles] = useState<File[] | null>(null);
  const [URLs, setURLs] = useState<string[]>([]);
  const [cost, setCost] = useState(0);
  const dropZoneConfig = {
    maxFiles: 1,
    maxSize: 1024 * 1024 * 1,
    multiple: true,
    accept: {
      "text/plain": [".txt"],
    }
  };

  function convertToSubcurrency(amount: number, factor = 100) {
    return Math.round(amount * factor);
  }
  

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
  
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          cost,
          URLs,
        }),
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
        console.log(response.json());
      } else {
        console.error('Error sending email:', await response.json());
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  

  }
  //const form = useForm();
  const onUpload = (file: File) => {
    const reader = new FileReader();
    const cosntPrice= 5;
    var totalPrice = 0
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const urls = content.split('\n').filter(url => url.trim() !== '');
      for (var i =0; i < urls.length; i++) {
        totalPrice += cosntPrice;
      }
      console.log("Total Price:", totalPrice); // Debugging line
      setCost(totalPrice);
      setURLs(urls);
      setUpload(true);

    };
    reader.readAsText(file);
  };
  

  return (
    <>
    <section className="container">
    <Header />
    <h1 className="container items-center text-2xl font-bold">
      Passer le commande de reconstruction 3D issus de LidarHD
    </h1>
    <text className="container items-center text-grey-400">
    Première étape de projet dédié à la mise à jour des données de carte 3D, en savoir plus <Link className="font-bold" href=""> ici.</Link> 
    </text>
    <div className="container items-center text-grey-400">
   
    </div>

    <div className="content" >
    <div className="image-container">    
    <h2>
      1. select the regions from the diffusion-lidar website accessible via the image
    </h2>
   <Link href={"https://diffusion-lidarhd.ign.fr"}>
   <div className="flex justify-center items-center">
    <Image src={embed_graph} width={200} height={200} alt="graph"  />
    </div>
    </Link>
    </div>
    <div className="form-container">
    <h2> 
    2. Fill the form with the selected tile params
    </h2>
      <form className="flex flex-col items-center" onSubmit={onSubmit}>
      <text>Select the Tile file generated from diffusion-lidar</text>
      <FileUploader
            value={files}
            onValueChange={(newFiles) => {
              setFiles(newFiles);
              if (newFiles && newFiles.length > 0) {
                onUpload(newFiles[0]);
              }
            }}
            dropzoneOptions={dropZoneConfig}
            className="relative bg-background rounded-lg p-2"      
        >
        <FileInput className="outline-dashed outline-1 outline-white">
        <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
          <FileSvgDraw />
        </div>
      </FileInput>
      <FileUploaderContent>
        {
          files && files.length > 0  &&
          files.map((file, i) => (
            <FileUploaderItem key={i} index={i}>
              <Paperclip className="h-4 w-4 stroke-current" />
              <span>{file.name}</span>
            </FileUploaderItem>
            // for each dalle file corresponding 
         ))}
      </FileUploaderContent>
    </FileUploader>

      <label htmlFor="email">E-mail:</label>
      <input type="email" id="email" name="email" required />
      <br />
      <label htmlFor="num-tiles">Nombre de tuiles sélectionnées:</label>
         {  <text>{URLs.length}</text> 
         }
    <br />
    
      <br />

    
   

    <Button type="submit"> Submit form</Button>

            </form>
        <div className="flex justify-center items-center">
            <Button type="button" onClick={() => setPayment(true)}>
         Payment of {cost}$ on stripe
        </Button>
        {
          payment && 

          <Elements 
    
    options={{
     mode: "payment",
     amount: convertToSubcurrency(cost),
     currency: "usd",
    }}
    stripe={stripePromise}>
    <StripeComponent 
    amount={cost} />
     </Elements>
    
        }
   </div>
   
   
    </div>
    </div>
    </section> 
    </>
  );
}
