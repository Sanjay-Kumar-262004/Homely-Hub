import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaBed, FaHome, FaBuilding, FaHotel, FaWifi, FaTv, FaParking, FaSwimmingPool, FaUtensils, FaHandsWash } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Filter = ({ showModal, handleClose }) => {
  const [minPrice, setMinPrice] = useState(600);
  const [maxPrice, setMaxPrice] = useState(30000);
  const [sliderValue, setSliderValue] = useState([600, 30000]);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleModalClose = () => {
    handleClose(); // Close the modal
  };

  const handleSliderChange = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
    setSliderValue(value);
  };
  
  const handleMinInputChange = (e) => {
    const newMinPrice = parseInt(e.target.value);
    setMinPrice(newMinPrice);
    if (newMinPrice > maxPrice) {
      setMaxPrice(newMinPrice);
      setSliderValue([newMinPrice, newMinPrice]);
    } else {
      setSliderValue([newMinPrice, maxPrice]);
    }
  };
  
  const handleMaxInputChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    setMaxPrice(newMaxPrice);
    if (newMaxPrice < minPrice) {
      setMinPrice(newMaxPrice);
      setSliderValue([newMaxPrice, newMaxPrice]);
    } else {
      setSliderValue([minPrice, newMaxPrice]);
    }
  };
  
  

  const handleClearFilters = () => {
    setMinPrice(600);
    setMaxPrice(30000);
    setSliderValue([600, 30000]);
    setSelectedPropertyType(null);
    setSelectedRoomType(null);
    setSelectedAmenities([]); // Reset selected amenities
  };

  const handleApplyFilters = () => {
    // Handle applying filters, e.g., sending selected price range to parent component
    handleClose();
  };

  const handlePropertyTypeSelect = (propertyType) => {
    setSelectedPropertyType(propertyType === selectedPropertyType ? null : propertyType);
  };

  const handleRoomTypeSelect = (roomType) => {
    setSelectedRoomType(roomType === selectedRoomType ? null : roomType);
  };

  const handleAmenitySelect = (amenity) => {
    const updatedAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((item) => item !== amenity)
      : [...selectedAmenities, amenity];
    setSelectedAmenities(updatedAmenities);
  };

  return (
    <Modal show={showModal} onHide={handleModalClose} centered backdrop="static">
      <Modal.Header closeButton>
        <h5 className="modal-title text-center w-100">Filters</h5>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="priceRange" className="form-label">Price Range:</label>
        <div className="mb-3">
          <Slider
            min={600}
            max={30000}
            value={sliderValue}
            onChange={handleSliderChange}
            style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          />
          <div className="d-flex justify-content-between" style={{ marginTop: '10px' }}>
            <span>600</span>
            <span>30,000</span>
          </div>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <input
            type="number"
            className="form-control text-center"
            value={minPrice}
            onChange={handleMinInputChange}
            style={{ width: '48%' }}
          />
          <input
            type="number"
            className="form-control text-center"
            value={maxPrice}
            onChange={handleMaxInputChange}
            style={{ width: '48%' }}
          />
        </div>
        <label htmlFor="propertyType" className="form-label">Property Type:</label>
        <div className="d-flex justify-content-between">
          <Button
            variant={selectedPropertyType === 'house' ? "primary" : "outline-primary"}
            style={{ flex: '1', marginRight: '10px' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'}
            onMouseLeave={(e) => e.target.style.backgroundColor = selectedPropertyType === 'house' ? '#007bff' : 'transparent'}
            onClick={() => handlePropertyTypeSelect('house')}
          >
            <FaHome size={20} style={{ marginRight: '5px' }} />
            <span>House</span>
          </Button>
          <Button
            variant={selectedPropertyType === 'flat' ? "primary" : "outline-primary"}
            style={{ flex: '1', marginRight: '10px' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'}
            onMouseLeave={(e) => e.target.style.backgroundColor = selectedPropertyType === 'flat' ? '#007bff' : 'transparent'}
            onClick={() => handlePropertyTypeSelect('flat')}
          >
            <FaBuilding size={20} style={{ marginRight: '5px' }} />
            <span>Flat</span>
          </Button>
          <Button
            variant={selectedPropertyType === 'guestHouse' ? "primary" : "outline-primary"}
            style={{ flex: '1', marginRight: '10px' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'}
            onMouseLeave={(e) => e.target.style.backgroundColor = selectedPropertyType === 'guestHouse' ? '#007bff' : 'transparent'}
            onClick={() => handlePropertyTypeSelect('guestHouse')}
          >
            <FaBed size={20} style={{ marginRight: '5px' }} />
            <span>Guest House</span>
          </Button>
          <Button
            variant={selectedPropertyType === 'hotel' ? "primary" : "outline-primary"}
            style={{ flex: '1' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'}
            onMouseLeave={(e) => e.target.style.backgroundColor = selectedPropertyType === 'hotel' ? '#007bff' : 'transparent'}
            onClick={() => handlePropertyTypeSelect('hotel')}
          >
            <FaHotel size={20} style={{ marginRight: '5px' }} />
            <span>Hotel</span>
          </Button>
        </div>
        <label htmlFor="roomType" className="form-label mt-3">Room Type :</label>
        <div className="d-flex justify-content-between">
          <Button
            variant={selectedRoomType === 'entireRoom' ? "primary" : "outline-primary"}
            style={{ flex: '1', marginRight: '10px' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'}
            onMouseLeave={(e) => e.target.style.backgroundColor = selectedRoomType === 'entireRoom' ? '#007bff' : 'transparent'}
            onClick={() => handleRoomTypeSelect('entireRoom')}
          >
            <FaBed size={20} style={{ marginRight: '5px' }} />
            <span>Entire Room</span>
          </Button>
          <Button
            variant={selectedRoomType === 'room' ? "primary" : "outline-primary"}
            style={{ flex: '1', marginRight: '10px' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'}
            onMouseLeave={(e) => e.target.style.backgroundColor = selectedRoomType === 'room' ? '#007bff' : 'transparent'}
            onClick={() => handleRoomTypeSelect('room')}
          >
            <FaHotel size={20} style={{ marginRight: '5px' }} />
            <span>Room</span>
          </Button>
          <Button
            variant={selectedRoomType === 'anyType' ? "primary" : "outline-primary"}
            style={{ flex: '1' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'}
            onMouseLeave={(e) => e.target.style.backgroundColor = selectedRoomType === 'anyType' ? '#007bff' : 'transparent'}
            onClick={() => handleRoomTypeSelect('anyType')}
          >
            <FaBuilding size={20} style={{ marginRight: '5px' }} />
            <span>Any Type</span>
          </Button>
        </div>
        <label htmlFor="amenities" className="form-label mt-3">Amenities:</label>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="wifi"
                  checked={selectedAmenities.includes('wifi')}
                  onChange={() => handleAmenitySelect('wifi')}
                />
                <label className="form-check-label" htmlFor="wifi"><FaWifi /> Wi-Fi</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="ac"
                  checked={selectedAmenities.includes('ac')}
                  onChange={() => handleAmenitySelect('ac')}
                />
                <label className="form-check-label" htmlFor="ac"><FaWifi /> AC</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="tv"
                  checked={selectedAmenities.includes('tv')}
                  onChange={() => handleAmenitySelect('tv')}
                />
                <label className="form-check-label" htmlFor="tv"><FaTv /> TV</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="parking"
                  checked={selectedAmenities.includes('parking')}
                  onChange={() => handleAmenitySelect('parking')}
                />
                <label className="form-check-label" htmlFor="parking"><FaParking /> Free Parking</label>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="kitchen"
                  checked={selectedAmenities.includes('kitchen')}
                  onChange={() => handleAmenitySelect('kitchen')}
                />
                <label className="form-check-label" htmlFor="kitchen"><FaUtensils /> Kitchen</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="washingMachine"
                  checked={selectedAmenities.includes('washingMachine')}
                  onChange={() => handleAmenitySelect('washingMachine')}
                />
                <label className="form-check-label" htmlFor="washingMachine"><FaHandsWash /> Washing Machine</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="pool"
                  checked={selectedAmenities.includes('pool')}
                  onChange={() => handleAmenitySelect('pool')}
                />
                <label className="form-check-label" htmlFor="pool"><FaSwimmingPool /> Pool</label>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClearFilters}>
          Clear Filters
        </Button>
        <Button variant="primary" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Filter;
