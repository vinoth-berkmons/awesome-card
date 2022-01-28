import { FC, useState } from 'react';
import { PinInput } from '../../../../common/components';


/**
 * PinInputs component has two scenario. 
 * Set Pin and Verify Pin
 * Only Accepts number
 * @param setUserPin 
 * @returns 
 */

const PinInputs: FC<any> = ({ setUserPin }) => {
    const [pin, setPin] = useState('');
    const [verifyPin, setVerifyPin] = useState('');
    const [showPin, setShowSetPin] = useState(true);
    const [showVerifyPin, setShowVerifySetPin] = useState(false);
    const [error, setError] = useState('')


    /**
     * Set Pin only if the 4 numbers are entered
     * @param val 
     */
    const setPinChange = (val: string) => {
        if (val.length >= 4) {
            setPin(val);
            setShowSetPin(false);
            setShowVerifySetPin(true);
        }
    }

    /**
     * Set Verify Pin only if the 4 numbers are entered
     * @param val 
     */
    const verifyPinChange = (val: string) => {
        if (val.length >= 4) {
            setVerifyPin(val)
        }
        setError('')

    }

    /**
     * Compare Set/Verify Pins are matching. If not show error message
     */
    const checkVerifyPin = () => {
        if (pin === verifyPin) {
            setUserPin(pin)
        } else {
            setError('Pin is mismatching')
        }
    }

    return (
        <>
            {showPin && <div>
                <p>Set PIN</p>
                <PinInput width="50px" height="50px"
                    inputChange={(e: string) => setPinChange(e)} />
            </div>}

            <>

                {showVerifyPin && <div>
                    {error && <div>{error}</div>}
                    <p>Verify PIN</p>
                    <PinInput width="50px" height="50px"
                        isVerify={true}
                        inputChange={(e: string) => verifyPinChange(e)}
                        submitVerify={() => checkVerifyPin()}
                    />
                </div>}
            </>


        </>

    )
}

export { PinInputs }