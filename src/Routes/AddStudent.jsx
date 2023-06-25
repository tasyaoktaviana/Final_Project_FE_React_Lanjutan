import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Spinner,
} from '@chakra-ui/react';

const AddStudent = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [programStudy, setProgramStudy] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'fullname') setFullname(value);
    else if (name === 'profilePicture') setProfilePicture(value);
    else if (name === 'address') setAddress(value);
    else if (name === 'phoneNumber') setPhoneNumber(value);
    else if (name === 'birthDate') setBirthDate(value);
    else if (name === 'gender') setGender(value);
    else if (name === 'programStudy') setProgramStudy(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newStudent = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty: getFacultyByProgramStudy(programStudy),
      programStudy,
    };

    setIsLoading(true);

    fetch('http://localhost:3001/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    })
      .then(() => {
        navigate('/student');
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getFacultyByProgramStudy = (programStudy) => {
    switch (programStudy) {
      case 'Ekonomi':
      case 'Manajemen':
      case 'Akuntansi':
        return 'Fakultas Ekonomi';
      case 'Administrasi Publik':
      case 'Administrasi Bisnis':
      case 'Hubungan Internasional':
        return 'Fakultas Ilmu Sosial dan Politik';
      case 'Teknik Sipil':
      case 'Arsitektur':
        return 'Fakultas Teknik';
      case 'Matematika':
      case 'Fisika':
      case 'Informatika':
        return 'Fakultas Teknologi Informasi dan Sains';
      default:
        return '';
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner size="xl" color="blue.500" />
      ) : (
        <Box maxW="md" mx="auto" mt={8} p={4}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="fullname">Full Name:</FormLabel>
              <Input
                type="text"
                id="fullname"
                name="fullname"
                value={fullname}
                onChange={handleInputChange}
                data-testid="name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="profilePicture">Profile Picture:</FormLabel>
              <Input
                type="text"
                id="profilePicture"
                name="profilePicture"
                value={profilePicture}
                onChange={handleInputChange}
                data-testid="profilePicture"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="address">Address:</FormLabel>
              <Input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={handleInputChange}
                data-testid="address"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="phoneNumber">Phone Number:</FormLabel>
              <Input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
                data-testid="phoneNumber"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="birthDate">Birth Date:</FormLabel>
              <Input
                type="date"
                id="birthDate"
                name="birthDate"
                value={birthDate}
                onChange={handleInputChange}
                data-testid="date"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="gender">Gender:</FormLabel>
              <Select
                id="gender"
                name="gender"
                value={gender}
                onChange={handleInputChange}
                data-testid="gender"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="programStudy">Program Study:</FormLabel>
              <Select
                name="programStudy"
                value={programStudy}
                onChange={handleInputChange}
                data-testid="prody"
              >
                <option value="">- Select Program Study -</option>
                <option value="Ekonomi">Ekonomi</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Administrasi Publik">Administrasi Publik</option>
                <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                <option value="Hubungan Internasional">Hubungan Internasional</option>
                <option value="Teknik Sipil">Teknik Sipil</option>
                <option value="Arsitektur">Arsitektur</option>
                <option value="Matematika">Matematika</option>
                <option value="Fisika">Fisika</option>
                <option value="Informatika">Informatika</option>
              </Select>
            </FormControl>

            <Button mt={6} colorScheme="blue" type="submit" data-testid="add-btn">
              Add Student
            </Button>
          </form>
        </Box>
      )}
    </>
  );
};

export default AddStudent;
