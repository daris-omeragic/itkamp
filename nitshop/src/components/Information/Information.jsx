import React from 'react'
import SimplifiedDiv from '../SimplifiedDiv/SimplifiedDiv';
import Text from '../Text/Text';
import { colors, fontSize, fontWeight } from '../../util/theme';








const Information = () => {
    const styles = {
        conatainer: {
            padding: '5% 10%',
            display: 'flex',
        },
        couponCodeLabelStyle: {
            fontSize: fontSize.small,
            color: colors.gray,
            marginLeft: '5px'
        },
        ul: {
            listStyleType: 'none',
            margin: '0px',
            padding: '30px'
        },
        li: {
            background: colors.secondColor,
            color: colors.gray,
            fontSize: fontSize.optimal,
            padding: '5px',
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'space-between'
        },
        liSpan: {
            textAlign: 'right',
            padding: '0px 5px'
        },
        button: {
            color: colors.white,
            background: colors.accentColor,
            border: 'none',
            padding: '5px 10px',
            fontSize: fontSize.small,
            cursor: 'pointer',
            marginTop: '15px'
        },
        countrySelectStyle: {
            width: '130px',
            color: colors.gray,
            fontSize: fontSize.small,
            padding: '3px',
            background: colors.secondColor
        },
        text: {
            marginBottom: '5px',
            color: colors.gray,
            fontSize: fontSize.optimal
        }
    }
    return (
        <>
            <SimplifiedDiv style={styles.conatainer}>
                <SimplifiedDiv style={{ width: '50%', height: '30vh', border: '0.5px solid lightGray', padding: '30px',lineHeight : '10px' }}>
                    <label>
                        <input type='checkbox' />
                        <span style={styles.couponCodeLabelStyle}> Use Coupon Code</span>
                    </label>
                    <br />
                    <label>
                        <input type='checkbox' />
                        <span style={styles.couponCodeLabelStyle}> Use Gift Voucher</span>
                    </label>
                    <br />
                    <label>
                        <input type='checkbox' />
                        <span style={styles.couponCodeLabelStyle}> Estimate Shipping & Taxes</span>
                    </label>
                    <SimplifiedDiv style={{ display: 'flex', margin: '25px 0px' }}>
                        <SimplifiedDiv style={{ display: 'flex', flexDirection: 'column' }}>
                            <Text style={styles.text}>Country:</Text>
                            <select name="drzava" style={styles.countrySelectStyle }>
                                <option value="United States">United Sates</option>
                                <option value="UK">UK</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Dubai">Dubai</option>
                                <option value="Canada">Canada</option>
                            </select>
                        </SimplifiedDiv>
                        <SimplifiedDiv style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                            <Text style={styles.text}>Region / State:</Text>
                            <select name="Select" style={styles.countrySelectStyle}>
                                <option value="Select">Select</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="London">London</option>
                                <option value="Dubai">Dubai</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Canada">Canada</option>
                            </select>
                        </SimplifiedDiv>
                        <SimplifiedDiv style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                            <Text style={styles.text}>Zip Code :</Text>
                            <input style={{ ...styles.countrySelectStyle, background: 'white', border: `1px solid ${colors.lightGray}` }}></input>
                        </SimplifiedDiv>
                    </SimplifiedDiv>
                    <button style={{ ...styles.button, marginTop: '0px' }}>Get Quotes</button>
                    <span><button style={{ ...styles.button, marginLeft: '20px', marginTop: '0px' }}>Continue</button></span>
                </SimplifiedDiv>
                <SimplifiedDiv style={{ width: '50%', height: '40vh', border: '0.5px solid lightGray', marginLeft: '25px' }}>
                    <ul style={styles.ul}>
                        <li style={styles.li}>Sub conatainer <span style={styles.liSpan}>59$</span></li>
                        <li style={styles.li}>Eco Tax <span style={styles.liSpan}>2$</span></li>
                        <li style={styles.li}>Shipping Cost <span style={styles.liSpan}>Free</span></li>
                        <li style={styles.li}>Total <span style={styles.liSpan}>61$</span></li>
                        <button style={styles.button}>Update</button>
                        <span><button style={{ ...styles.button, marginLeft: '20px' }}>Check Out</button></span>
                    </ul>
                </SimplifiedDiv>
            </SimplifiedDiv >
        </>
    )
}
export default Information;