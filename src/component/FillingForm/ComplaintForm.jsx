import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem ,
  DropdownMenuTrigger,
DropdownMenuGroup,
DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import API_URL from '@/url';
const ComplaintForm = () => {
  const [selection, setSelection] = useState('both'); // Default selection is 'both'
  const [tag, setTag] = useState("grade_issue");
  const [body, setBody] = useState("");
  const [complaintType,setComplaintType]=useState('Complaint')

  const handleRadioChange = (event) => {
    setSelection(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  }

  console.log(body);
  
  const submitForm = async () => {
    
    const bod = JSON.stringify({
      tag,
      body,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
  
  
    try {
      const res = await axios.post(
        `${API_URL}/complaint/complaints/`,
        bod,
        config,
      );
      console.log(res);
    } catch (err){
      console.log(err);
    }
  }
  

  return (
    <div className="flex justify-center items-center rounded md p-8 m-20">
      <div className="flex bg-slate-100 border-slate-500 
                      rounded pt-10 pl-10 pr-40 pb-12 shadow-lg backdrop-blur-sm
                      bg-opacity-50 text-sm/[40px] ">
        <form onSubmit={handleSubmit}>
          <h1 className="text-[32px] pt-24 pb-20 text-center">Complaint Filling Form</h1>
          <p className="text-[18px] mb-4">What is Your Complaint on?</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Input value={complaintType} className={cn('w-4/12')}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={cn('p-4')}>
              <DropdownMenuGroup>
Harrasment by
              <DropdownMenuItem onClick={()=>setComplaintType('Teacher')}>
              Teacher
              </DropdownMenuItem >
              <DropdownMenuItem onClick={()=>setComplaintType('Student')}>
              Student
              </DropdownMenuItem >

              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
              Services
              <DropdownMenuItem onClick={()=>setComplaintType('Lounge')}>
                Lounge
              </DropdownMenuItem >
              <DropdownMenuItem onClick={()=>setComplaintType('Other')}>
                Other
              </DropdownMenuItem >

              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={()=>setComplaintType('Grade')}>
              Grade Issues
              </DropdownMenuItem >
              <DropdownMenuItem onClick={()=>setComplaintType('Bullying')}>
              Bullying 
              </DropdownMenuItem >
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex text-[18px]">
          </div>

          <div className="relative mt-20 mb-8 space-x-4 text-[18px]">
            <label htmlFor="complaint">Complaint</label>
            <Textarea
              id="complaint"
              type="text"
              required
              rows="12"
              cols="20"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            />
          </div>

          <div className="flex flex-row-reverse space-x-10 space-y-8 text-[18px]">
            <Button
              type="submit"
              //className="w-32 mb-8 mt-6 rounded-full bg-purple-600 text-white hover:bg-purple-800 py-2 transition-colors duration-200"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
