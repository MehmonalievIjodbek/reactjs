import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './navbar.scss'

function DropdownItemTagsExample() {
    return (
        <DropdownButton id="dropdown-item-button" title="ALL COLLECTIONS">
            <Dropdown.Item as="button" className="dropdown-item-button">All</Dropdown.Item>
            <hr/>
            <Dropdown.Item as="button" className="dropdown-item-button">New Arrivals</Dropdown.Item>
            <hr/>
            <Dropdown.Item as="button" className="dropdown-item-button">Hot Sale</Dropdown.Item>
            <hr/>
            <Dropdown.Item as="button" className="dropdown-item-button">Furniture</Dropdown.Item>
            <hr/>
            <Dropdown.Item as="button" className="dropdown-item-button">Amrature</Dropdown.Item>
            <hr/>
            <Dropdown.Item as="button" className="dropdown-item-button">Tabble</Dropdown.Item>
            <hr/>
            <Dropdown.Item as="button" className="dropdown-item-button">Chair</Dropdown.Item>
            <hr/>
            <Dropdown.Item as="button" className="dropdown-item-button">Sofa</Dropdown.Item>
            <hr/>
            <Dropdown.Item as="button" className="dropdown-item-button">Mirrors</Dropdown.Item>
            <hr/>
            <Dropdown.Item as="button" className="dropdown-item-button">Stools</Dropdown.Item>
        </DropdownButton>
    );
}

export default DropdownItemTagsExample;