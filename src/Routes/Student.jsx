import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Link
} from '@chakra-ui/react';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true)
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState('All');

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    filterStudentsByFaculty();
  }, [students, selectedFaculty]);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:3001/student');
      const data = await response.json();
      setStudents(data);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  const filterStudentsByFaculty = () => {
    if (selectedFaculty === 'All') {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(
        (student) => student.faculty === selectedFaculty
      );
      setFilteredStudents(filtered);
    }
  };

  const handleFacultyChange = (event) => {
    setSelectedFaculty(event.target.value);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: 'DELETE',
      });
      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box className='test-table-container'>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          All Students
        </Text>
        <FormControl mb={4}>
          <FormLabel>Filter by Faculty</FormLabel>
          <Select
            value={selectedFaculty}
            onChange={handleFacultyChange}
            data-testid="filter"
          >
            <option value="All">All</option>
            <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
            <option value="Fakultas Ilmu Sosial dan Politik">
              Fakultas Ilmu Sosial dan Politik
            </option>
            <option value="Fakultas Teknik">Fakultas Teknik</option>
            <option value="Fakultas Teknologi Informasi dan Sains">
              Fakultas Teknologi Informasi dan Sains
            </option>
          </Select>
        </FormControl>
    
        {filteredStudents.length > 0 ? (
          <Table variant="striped" size="md" className='test-table'>
            <Thead className='test-thead'>
              <Tr>
                <Th>No</Th>
                <Th>Full Name</Th>
                <Th>Faculty</Th>
                <Th>Program Study</Th>
                <Th>Option</Th>
              </Tr>
            </Thead>
            <Tbody className='test-body'>
              {filteredStudents.map((student, index) => (
                <Tr key={student.id} className= 'student-data-row test-tr'>
                  <Td>{index + 1}</Td>
                  <Td>
                    <Link href={`/student/${student.id}`}>{student.fullname}</Link>
                  </Td>
                  <Td>{student.faculty}</Td>
                  <Td>{student.programStudy}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      size="sm"
                      data-testid={`delete-${student.id}`}
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Text>Loading ...</Text>
        )}
      </Box>
    </>
  );
};

export default Student;
