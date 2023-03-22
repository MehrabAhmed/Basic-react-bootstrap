import Button from 'react-bootstrap/Button';
import "./style.css"

export const TestButton = ({buttonname}) => {
return(
    <div className='TestButton'>
      <button className='Demobutton'>buttonname</button>
      <h2>Demo Button</h2>
    </div>
);
}

export const PrimaryButton = () => {
    return(
        <div className='PrimaryButton'>
          <Button variant="primary">Primary</Button>{' '}
   
        </div>
    );
}





