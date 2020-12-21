import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Input, Field } from 'antd';
import 'antd/dist/antd.css';
// import Autocomplete from 'react-google-autocomplete';
import { registerCustomer } from '../../../api/index';

import './CustomerRegistration.css';

const CustomerRegistration = props => {
  const defaultUser = {
    name: '',
    lastname: '',
    email: props.location.state.email,
    phone: '',
    zip: '',
    address: '',
    latitude: '', // retrieved by react-geocode
    longitude: '', // retrieved by react-geocode
    city: '',
    state: '',
    country: '',
    photo_url: 'https://images.unsplash.com/photo-1586057710892-4f30aed09a20',
  };

  const { register, handleSubmit, errors } = useForm();
  const [user, setUser] = useState(defaultUser);

  const onSubmit = () => {
    props.registerCustomer(user, props);
  };

  const handleInputChange = event => {
    event.preventDefault();
    //   getting name of input and value
    setUser({
      ...user,
      // seting key to key-value pair
      [event.target.name]: event.target.value,
    });
  };

  return (
    //   change user.state based on whats coming in input

    <div className="registration-container">
      <h1>Customer Registration</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Field htmlFor="name">Name: </Field>

        {/* use aria-invalid to indicate field contain error for screen reader users*/}
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="First Name"
          onChange={handleInputChange}
          aria-invalid={errors.name ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.name && errors.name.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <Field htmlFor="lastname">Last Name: </Field>
        <Input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last Name"
          onChange={handleInputChange}
          aria-invalid={errors.lastname ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.lastname && errors.lastname.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.lastname && errors.lastname.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <Field htmlFor="phone">Phone: </Field>

        <Input
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          onChange={handleInputChange}
          aria-invalid={errors.phone ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.phone && errors.phone.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.phone && errors.phone.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <Field htmlFor="address">Address: </Field>

        <Input
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          onChange={handleInputChange}
          aria-invalid={errors.address ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* todo maybe I can use this for the inputs as a stretch goal
         <Autocomplete        
          apiKey={process.env.REACT_APP_API_KEY}
          style={{ width: '90%' }}
          id="address"
          onChange={handleInputChange}
          aria-invalid={errors.address ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
          onPlaceSelected={(place) => {
            console.log(place);
          }}
          types={['(regions)']}
          componentRestrictions={{ address: user.address }}
        /> */}

        {/* use role="alert" to announce the error message */}
        {errors.address && errors.address.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.address && errors.address.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <Field htmlFor="city">City: </Field>

        <Input
          type="text"
          id="city"
          name="city"
          placeholder="City"
          onChange={handleInputChange}
          aria-invalid={errors.city ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.city && errors.city.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.city && errors.city.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <Field htmlFor="state">State: </Field>

        <Input
          type="text"
          id="state"
          name="state"
          placeholder="State"
          onChange={handleInputChange}
          aria-invalid={errors.state ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.state && errors.state.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.state && errors.state.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <Field htmlFor="country">Country: </Field>
        <Input
          type="text"
          id="country"
          name="country"
          placeholder="Country"
          onChange={handleInputChange}
          aria-invalid={errors.country ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.country && errors.country.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.country && errors.country.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <Field htmlFor="zipcode">Zipcode: </Field>

        <Input
          type="text"
          id="zipcode"
          name="zip"
          placeholder="zipcode"
          onChange={handleInputChange}
          aria-invalid={errors.zipcode ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.zipcode && errors.zipcode.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.zipcode && errors.zipcode.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <Field htmlFor="description">Description: </Field>

        <Input
          type="text"
          id="description"
          name="description"
          placeholder="description"
          onChange={handleInputChange}
          aria-invalid={errors.description ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 300 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.description && errors.description.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.description && errors.description.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}
        <Field htmlFor="photoUrl">Photo URL: </Field>

        <Input
          type="text"
          id="photoUrl"
          name="photo_url"
          placeholder="Photo URL"
          onChange={handleInputChange}
          aria-invalid={errors.zipcode ? 'true' : 'false'}
          ref={register({ required: false, maxLength: 300 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.photoUrl && errors.photoUrl.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    customer: state.customerReducer.customer,
  };
};

export default connect(mapStateToProps, { registerCustomer })(
  CustomerRegistration
);
