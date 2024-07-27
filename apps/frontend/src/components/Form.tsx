import React, { useState } from 'react';
import Input from './ui/input';
import Toggle from './ui/Toogle';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import axios from 'axios';
import FormattedInstructions from './FormattedInstructions';

interface FormData {
  firstname: string;
  phone: string;
  gender: string;
  lastname: string;
  dob: string;
  maritalStatus: string;
  annualIncome: string;
  riskTolerance: string;
  fixedDeposits: string;
  stockMarketInvestment: string;
  mutualFundInvestments: string;
  currentFinancialSituation: string;
}

function Form() {
  const [selectedGender, setSelectedGender] = useState<string>('Male');
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState<string>('Married');
  const [result, setResult] = useState<boolean>(false);
  const [response, setResponse] = useState<{ instructions: string }>({ instructions: '' });
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    phone: '',
    gender: 'Male',
    lastname: '',
    dob: '',
    maritalStatus: 'Married',
    annualIncome: '',
    riskTolerance: '',
    fixedDeposits: '',
    stockMarketInvestment: '',
    mutualFundInvestments: '',
    currentFinancialSituation: '',
  });

  const [currentForm, setCurrentForm] = useState<number>(1);

  const formOneSubmit = () => {
    setFormData({ ...formData, gender: selectedGender, maritalStatus: selectedMaritalStatus });
    setCurrentForm(2);
  };

  const formTwoSubmit = async () => {
    try {
      console.log({ formData });
      console.log('Loading...');

      // Make the POST request
      const res = await axios.post('https://anshbhatt102.pythonanywhere.com/investment_advice', {
        "investment_type":"high risk",
        "annual_income":"rupees 10 lakhs",
        "num_fds":2,
        "fd_amounts":"₹4 lakhs each",
        "mutual_fund_investment":"2",
        "investment_options_type":"high risk"
    });
      console.log('Result:', res.data);
      setResult(true);
      setResponse(res.data);
      console.log(response);

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <main className='w-[100vw] h-[100vh] md:w-[70%] flex flex-col gap-[20px] md:justify-center justify-start items-center'>
      {currentForm === 1 && !result && (
        <div>
          <h1 className='text-center text-4xl font-bold'>BASIC DETAILS</h1>
          <div className='form1 md:border p-5 w-[100%] flex flex-col md:flex-row justify-center md:items-center align-center gap-[20px] rounded-lg'>
            <div className='flex flex-col w-full justify-around gap-[30px]'>
              <div>
                <Input placeholder='First Name' type='text' name='firstname' className='rounded-lg md:w-[250px] w-[90vw]' value={formData.firstname} onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}></Input>
              </div>
              <div>
                <Input placeholder='Phone number' type='tel' name='phone no' className='rounded-lg md:w-[250px] w-[90vw]' value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}></Input>
              </div>
              <div>
                <Toggle
                  options={['Male', 'Female']}
                  selectedOption={selectedGender}
                  onOptionSelect={(gender) => {
                    setSelectedGender(gender);
                    setFormData({ ...formData, gender });
                  }}
                  lable='Gender'
                />
              </div>
            </div>
            <div className='flex w-full flex-col justify-around gap-[30px]'>
              <div>
                <Input placeholder='Last Name' type='text' name='lastname' className='rounded-lg md:w-[250px] w-[90vw]' value={formData.lastname} onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}></Input>
              </div>
              <div>
                <Input type='date' placeholder='DOB' name='DOB' className='rounded-lg md:w-[250px] w-[90vw]' value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })}></Input>
              </div>
              <div className='flex flex-col w-full justify-around gap-[30px]'>
                <label htmlFor='risk' className='ml-[10px] mb-[-30px] text-[12px] font-bold text-start'>Marital Status</label>
                <Select onValueChange={(value) => setSelectedMaritalStatus(value)}>
                  <SelectTrigger className='w-[90vw] md:w-[250px] bg-greyBg outline-orange p-[23px]'>
                    <SelectValue placeholder='Marital Status' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className='bg-background'>
                      <SelectLabel>Marital Status</SelectLabel>
                      <SelectItem value='Married'>Married</SelectItem>
                      <SelectItem value='Unmarried'>Unmarried</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentForm === 2 && !result && (
        <div className='form1 md:border p-5 w-[100%] flex flex-col justify-center align-center md:flex-row gap-[20px] rounded-lg'>
          <h1 className='text-center text-4xl font-bold'>FINANCIAL DETAILS</h1>
          <div className='flex flex-col w-full justify-around gap-[30px]'>
            <div>
              <Input placeholder='Annual Income' type='text' name='annual Income' className='w-[90vw] md:w-[250px] rounded-lg' value={formData.annualIncome} onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}></Input>
            </div>
            <div>
              <Input placeholder='Total FD Amount' type='text' name='fixed Deposits' className='w-[90vw] md:w-[250px] rounded-lg' value={formData.fixedDeposits} onChange={(e) => setFormData({ ...formData, fixedDeposits: e.target.value })}></Input>
            </div>
            <div>
              <Input placeholder='Number of MFs' type='text' name='mutual Fund Investments' className='w-[90vw] md:w-[250px] rounded-lg' value={formData.mutualFundInvestments} onChange={(e) => setFormData({ ...formData, mutualFundInvestments: e.target.value })}></Input>
            </div>
          </div>
          <div className='flex flex-col w-full justify-around gap-[30px]'>
            <label htmlFor='risk' className='ml-[10px] mb-[-30px] text-[12px] font-bold text-start'>RISK TOLERANCE</label>
            <Select onValueChange={(value) => setFormData({ ...formData, riskTolerance: value })} name='risk'>
              <SelectTrigger className='w-[90vw] md:w-[180px] bg-greyBg outline-orange'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent className='bg-background'>
                <SelectGroup className='bg-background'>
                  <SelectLabel>Risk Tolerance</SelectLabel>
                  <SelectItem value='low'>Low</SelectItem>
                  <SelectItem value='medium'>Medium</SelectItem>
                  <SelectItem value='high'>High</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div>
              <Input placeholder='Number of investments' type='text' name='stock Market Investment' className='w-[90vw] md:w-[250px] rounded-lg' value={formData.stockMarketInvestment} onChange={(e) => setFormData({ ...formData, stockMarketInvestment: e.target.value })}></Input>
            </div>
            <div>
              <Input placeholder='Describe' type='text' name='current Financial Situation' className='w-[90vw] md:w-[250px] rounded-lg' value={formData.currentFinancialSituation} onChange={(e) => setFormData({ ...formData, currentFinancialSituation: e.target.value })}></Input>
            </div>
          </div>
        </div>
      )}
      {!result && (
        <div className='flex flex-row buttons w-[100%] justify-between px-10 pb-[20px]'>
          {currentForm === 1 && (
            <Button disabled className='text-background bg-secondary'>
              Back
            </Button>
          )}
          {currentForm === 2 && (
            <Button onClick={() => setCurrentForm(1)} className='text-background bg-secondary'>
              Back
            </Button>
          )}
          {currentForm === 1 && (
            <Button onClick={formOneSubmit} className='text-background hover:bg-mutedOrange'>
              Next
            </Button>
          )}
          {currentForm === 2 && (
            <Button onClick={formTwoSubmit} className='text-background hover:bg-mutedOrange'>
              Submit
            </Button>
          )}
        </div>
      )}
      {result && (
        <div className='investment-advice'>
          <h1>Investment Advice Details</h1>
          <FormattedInstructions instructions={response.instructions} />
        </div>
      )}
    </main>
  );
}

export default Form;
