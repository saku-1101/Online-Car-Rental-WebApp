import { useMutation } from '@apollo/client';
import PageTitle from '../atoms/PageTitle';
import { useState } from 'react';
import { CreateCustomerDocument } from '@@/pages/api/front/generated/graphql';
import { useRouter } from 'next/router';
import { useCustomerContext } from '@@/hooks/useCustomerContext';

export default function CustomerRegistration() {
  const router = useRouter();
  const [addCustomerFunc, { data, loading, error }] = useMutation(CreateCustomerDocument);
  const { handleSetCustomerId } = useCustomerContext();
  const [message, setError] = useState('');
  const [form, setState] = useState({
    name: '',
    post: '',
    address: '',
    suburb: '',
    state: '',
    country: '',
    email: '',
    phone_number: '',
  });

  // email validation
  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleSetState = (input: string) => (e: any) => {
    if (input === 'email') {
      if (isValidEmail(e.target.value)) {
        setState({ ...form, [input]: e.target.value });
        setError('');
      } else {
        setError('Invalid Email address');
      }
    } else {
      setState({ ...form, [input]: e.target.value });
    }
  };

  const handleRegistration = async () => {
    const res = await addCustomerFunc({
      variables: {
        input: {
          name: form.name,
          postCode: form.post,
          address: form.address,
          suburb: form.suburb,
          state: form.state,
          country: form.country,
          email: form.email,
          phone_number: form.phone_number,
        },
      },
    });
    console.log('Successfully registered! Customer ID is:', res.data?.createCustomer.customer_id);
    const customerId = res.data?.createCustomer.customer_id;
    customerId !== undefined ? handleSetCustomerId(customerId) : router.push('/registration-failed');
    router.push('/');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center justify-between px-10'>
        <PageTitle title='Register before you proceed!' />
        <div className='form-control w-full max-w-md align-middle'>
          <label className='label'>
            <span className='label-text'>Name</span>
            <span className='label-text-alt text-error'>*</span>
          </label>
          <input
            type='text'
            onChange={handleSetState('name')}
            placeholder='Type here'
            className='input input-bordered w-full max-w-md'
          />
        </div>

        <div className='w-full max-w-md flex md:flex-row md:justify-between flex-col content-between'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Post Address</span>
              <span className='label-text-alt text-error'>*</span>
            </label>
            <input
              type='text'
              onChange={handleSetState('post')}
              placeholder='Type here'
              className='input input-bordered w-full max-w-md'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Address</span>
              <span className='label-text-alt text-error'>*</span>
            </label>
            <input
              type='text'
              onChange={handleSetState('address')}
              placeholder='Type here'
              className='input input-bordered w-full max-w-md'
            />
          </div>
        </div>

        <div className='w-full max-w-md flex flex-row gap-2'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Suburb</span>
              <span className='label-text-alt text-error'>*</span>
            </label>
            <input
              type='text'
              onChange={handleSetState('suburb')}
              placeholder='Type here'
              className='input input-bordered w-full max-w-md'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>State</span>
              <span className='label-text-alt text-error'>*</span>
            </label>
            <input
              type='text'
              onChange={handleSetState('state')}
              placeholder='Type here'
              className='input input-bordered w-full max-w-md'
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Country</span>
              <span className='label-text-alt text-error'>*</span>
            </label>
            <input
              type='text'
              onChange={handleSetState('country')}
              placeholder='Type here'
              className='input input-bordered w-full max-w-md'
            />
          </div>
        </div>

        <div className='form-control w-full max-w-md'>
          <label className='label'>
            <span className='label-text'>Phone</span>
            <span className='label-text-alt text-error'>*</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            onChange={handleSetState('phone_number')}
            className='input input-bordered w-full max-w-md'
          />
        </div>
        <div className='form-control w-full max-w-md'>
          <label className='label'>
            <span className='label-text'>Email</span>
            <span className='label-text-alt text-error'>* {message}</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            onChange={handleSetState('email')}
            className='input input-bordered w-full max-w-md'
          />
        </div>
        {form.name != '' &&
        form.post != '' &&
        form.address != '' &&
        form.suburb != '' &&
        form.state != '' &&
        form.country != '' &&
        form.phone_number != '' &&
        form.email != '' &&
        message == '' ? (
          ''
        ) : (
          <p className='text-sm text-error text-left'>Please provide us with all the correct essential information.</p>
        )}

        <div className='w-full flex flex-row justify-center gap-10'>
          <button
            disabled={
              form.name != '' &&
              form.post != '' &&
              form.address != '' &&
              form.suburb != '' &&
              form.state != '' &&
              form.country != '' &&
              form.phone_number != '' &&
              form.email != '' &&
              message == ''
                ? false
                : true
            }
            className='btn btn-secondary'
            onClick={() => handleRegistration()}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
