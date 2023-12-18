import React, { useState, ChangeEvent, FormEvent } from 'react';

interface SearchFormProps {
  handleSearch: (term: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
   
    <form onSubmit={handleSubmit} className=" d-flex search-form mt-3 mb-2 px-5">
      <input
        type="text"
        placeholder="Cerca per nome..."
        value={searchTerm}
        onChange={handleChange}
        className="form-control mr-2"
        />
      <button type="submit" className="btn button mx-2">Cerca</button>
    </form>

  );
};

export default SearchForm;
