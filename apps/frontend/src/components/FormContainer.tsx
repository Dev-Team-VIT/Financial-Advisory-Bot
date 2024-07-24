import React from 'react'
import Form from './Form'
type Props = {}

function FormContainer({}: Props) {
  return (
    <section className='w-[100%] md:w-[65vw] text-center h-[100%] md:h-[90vh] bg-background rounded-lg flex items-center justify-center'>
        <Form></Form>
    </section>
  )
}

export default FormContainer