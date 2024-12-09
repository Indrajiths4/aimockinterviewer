"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiAiModel';
import { LoaderCircle } from 'lucide-react';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useRouter } from 'next/navigation';

function AddNewInterview() {
    const {user}=useUser();
    const [openDialog,setopenDialog] = useState(false);
    const [jobPosition,setjobPosition] = useState();
    const [jobDescription,setjobDescription] = useState();
    const [yearofexp,setyearofexp] = useState();
    const [loading,setLoading]=useState(false);
    //const [jsonResponse,setJsonResponse]=useState([]);
    const router=useRouter();

    const onSubmit = async(e) => {
        setLoading(true);
        e.preventDefault();
        console.log(jobPosition, jobDescription, yearofexp);
        const inputPrompt = "Job position: "+jobPosition+", Job Description: "+jobDescription+", Years of Experience : "+yearofexp+" , Depending on Job Position, Job Description & Years of Experience give us 2 Interview question along with Answer in JSON format, Give us question and answer field on JSON in the format [{'question':'...','answer':'...'{...}}] ";

        const result = await chatSession.sendMessage(inputPrompt);
        const MockJsonResp=(result.response.text()).replace('```json','').replace('```','');
        //console.log(JSON.parse(MockJsonResp));
        //setJsonResponse(MockJsonResp);
        if(result) {
        const resp = await db.insert(MockInterview).values({
            mockId: uuidv4(),
            jsonMockResp: MockJsonResp,
            jobPosition: jobPosition,
            jobDesc: jobDescription,
            jobExperience: yearofexp,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD-MM-yyyy')
        }).returning({mockId:MockInterview.mockId})
        console.log("Inserted Id : ",resp);
        if(resp) {
            setopenDialog(false);
            router.push('/dashboard/interview/'+resp[0]?.mockId);
        }
        }
        else {
            console.log('Error');
        }
        setLoading(false);
    } 
    
  return (
    <div>
        <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'>
            <h2 className='text-lg text-center' onClick={() => {setopenDialog(true)}}>+ Add New</h2>
        </div>
        <Dialog open={openDialog}>
          <DialogContent className='max-w-2xl'>
            <DialogHeader>
              <DialogTitle className='text-2xl'>Tell me more about your job interviewing</DialogTitle>
              
                <form onSubmit={onSubmit}>
                <div>
                    <div>
                    <h2>Add Details about your job position/role, job description and Years of experience</h2>
                    </div>
                    <div className='mt-7 my-3'>
                        <label>Job Role/Position : </label>
                        <Input placeholder='Ex. Full Stack Developer' required onChange={(event) => {setjobPosition(event.target.value)}}/>
                    </div>

                    <div className='my-3'>
                        <label>Job Description(in short) : </label>
                        <Textarea placeholder='Ex. React,Vue etc..' onChange={(event) => {setjobDescription(event.target.value)}}/>
                    </div>

                    <div className='my-3'>
                        <label>Years of experience : </label>
                        <Input placeholder='Ex. 5' type='number' max="50" required onChange={(event) => {setyearofexp(event.target.value)}}/>
                    </div>
                </div>
                <div className='flex gap-5 justify-end'>
                    <Button type='button' variant='ghost' onClick={() => {setopenDialog(false)}}>Cancel</Button>
                    
                    <Button type='submit'>
                        {loading?
                        <><LoaderCircle className='animate-spin'/>Generating from AI</>:'Start Interview'}
                        </Button>
                </div>
                </form>
              
            </DialogHeader>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddNewInterview