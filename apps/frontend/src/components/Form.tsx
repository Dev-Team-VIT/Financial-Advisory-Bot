import React, { useState } from 'react';
import Input from './ui/input';
import Toogle from './ui/Toogle';
import { Button } from './ui/button';

interface FormData {
  firstname: string;
  phone: string;
  gender: string;
  lastname: string;
  dob: string;
  maritalStatus: string;
}

interface AddressData {
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
  const [formOneData, setFormOneData] = useState<FormData>({
    firstname: '',
    phone: '',
    gender: '',
    lastname: '',
    dob: '',
    maritalStatus: '',
  });
  const [formTwoData, setFormTwoData] = useState<AddressData>({
    annualIncome: '',
    riskTolerance: '',
    fixedDeposits: '',
    stockMarketInvestment: '',
    mutualFundInvestments: '',
    currentFinancialSituation: '',
  });
  const [currentForm, setCurrentForm] = useState<number>(1);

  const formOneSubmit = () => {
    const formData: FormData = {
      firstname: (document.getElementsByName('firstname')[0] as HTMLInputElement).value,
      phone: (document.getElementsByName('phone no')[0] as HTMLInputElement).value,
      gender: selectedGender,
      lastname: (document.getElementsByName('lastname')[0] as HTMLInputElement).value,
      dob: (document.getElementsByName('DOB')[0] as HTMLInputElement).value,
      maritalStatus: selectedMaritalStatus,
    };
    setFormOneData(formData);
    setCurrentForm(2);
  };

  const formTwoSubmit = () => {
    console.log({ formOneData, formTwoData }); // Log the entire form data
    alert(`Form submitted successfully! Data: ${JSON.stringify({ formOneData, formTwoData }, null, 2)}`); // Show an alert with the form data
  };

  return (
    <main className='w-[100%] md:w-[70%] flex flex-col gap-[20px]'>
      {currentForm === 1 && (
        <div className='form1 md:border p-10 w-[100%] flex flex-col justify-center align-center md:flex-row gap-[20px] rounded-lg'>
          <div className='flex flex-col w-full justify-around gap-[30px]'>
            <div>
              <Input placeholder='First Name' type='text' name='firstname' className='rounded-lg' value={formOneData.firstname} onChange={(e) => setFormOneData({ ...formOneData, firstname: e.target.value })}></Input>
            </div>
            <div>
              <Input placeholder='Phone number' type='tel' name='phone no' className='rounded-lg' value={formOneData.phone} onChange={(e) => setFormOneData({ ...formOneData, phone: e.target.value })}></Input>
            </div>
            <div>
              <Toogle
                options={['Male', 'Female']}
                selectedOption={selectedGender}
                onOptionSelect={(gender) => setSelectedGender(gender)}
                lable='Gender'
              />
            </div>
          </div>
          <div className='flex w-full flex-col justify-around gap-[30px]'>
            <div>
              <Input placeholder='Last Name' type='text' name='lastname' className='rounded-lg' value={formOneData.lastname} onChange={(e) => setFormOneData({ ...formOneData, lastname: e.target.value })}></Input>
            </div>
            <div>
              <Input type='date' placeholder='DOB' name='DOB' className='rounded-lg' value={formOneData.dob} onChange={(e) => setFormOneData({ ...formOneData, dob: e.target.value })}></Input>
            </div>
            <div>
              <Toogle
                lable='Marital Status'
                options={['Married', 'Unmarried', 'Divorced']}
                selectedOption={selectedMaritalStatus}
                onOptionSelect={(maritalStatus) => setSelectedMaritalStatus(maritalStatus)}
              />
            </div>
          </div>
        </div>
      )}
      {currentForm === 2 && (
        <div className='form2 md:border p-10 w-[100%] flex flex-col md:flex-row gap-[20px] rounded-lg'>
          <div className='flex flex-col w-full justify-around gap-[30px]'>
            <div>
              <Input placeholder='Annual Income' type='text' name='annual Income' className='rounded-lg' value={formTwoData.annualIncome} onChange={(e) => setFormTwoData({ ...formTwoData, annualIncome: e.target.value })}></Input>
            </div>
            <div>
              <Input placeholder='Fixed Deposits' type='text' name='fixed Deposits' className='rounded-lg' value={formTwoData.fixedDeposits} onChange={(e) => setFormTwoData({ ...formTwoData, fixedDeposits: e.target.value })}></Input>
            </div>
            <div>
              <Input placeholder='Mutual Fund Investments' type='text' name='mutual Fund Investments' className='rounded-lg' value={formTwoData.mutualFundInvestments} onChange={(e) => setFormTwoData({ ...formTwoData, mutualFundInvestments: e.target.value })}></Input>
            </div>
          </div>
          <div className='flex flex-col w-full justify-around gap-[30px]'>
            <div>
              <Input placeholder='Risk Tolerance' type='text' name='risk Tolerance' className='rounded-lg' value={formTwoData.riskTolerance} onChange={(e) => setFormTwoData({ ...formTwoData, riskTolerance: e.target.value })}></Input>
            </div>
            <div>
              <Input placeholder='Stock Market Investment' type='text' name='stock Market Investment' className='rounded-lg' value={formTwoData.stockMarketInvestment} onChange={(e) => setFormTwoData({ ...formTwoData, stockMarketInvestment: e.target.value })}></Input>
            </div>
            <div>
              <Input placeholder='Current Financial Situation' type='text' name='current Financial Situation' className='rounded-lg' value={formTwoData.currentFinancialSituation} onChange={(e) => setFormTwoData({ ...formTwoData, currentFinancialSituation: e.target.value })}></Input>
            </div>
          </div>
        </div>
      )}
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
    </main>
  );
}

export default Form;