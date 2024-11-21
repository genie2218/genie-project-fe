"use client"

import styles from '../styles.module.scss';
import LeftArrow from '@/app/components/LeftArrow';

interface IPriceDiscoveryResult {
  heading: string,
  subHeading: string,
  handleChange: () => void,
}

const PriceDiscoveryResult = (props: IPriceDiscoveryResult) => {
  const {
    heading,
    subHeading,
    handleChange,
  } = props;
  return (
    <>
      <div className={styles.headingContainer}>
          <LeftArrow onClick={handleChange} />
          <div className={styles.heading}>
            <p>{heading}</p>
            <p className={styles.subHeading}>{subHeading}</p>
          </div>
      </div>
      <div className={styles.inputDetails}>
        <span className={styles.edit} onClick={handleChange}>EDIT</span>
        <div className={styles.detail}>
          <h4>{`Area (in sq. yards)`}</h4>
          <p>200 to 400</p>
        </div>
        <div className={styles.detail}>
          <h4>{`Budget`}</h4>
          <p>₹2000000 to ₹40000000</p>
        </div>
        <div className={styles.detail}>
          <h4>{`Builder Type`}</h4>
          <p>Luxury</p>
        </div>
        <div className={styles.detail}>
          <h4>{`Floor Preference`}</h4>
          <p>Second Floor</p>
        </div>
      </div>
      <div className={styles.results}>
        <table>
            <tr>
              <th>Locality</th>
              <th>Size</th>
              <th>Min Price (₹)</th>
              <th>Max Price (₹)</th>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
            <tr>
              <td>East of Kailash</td>
              <td>400</td>
              <td>400000</td>
              <td>750000</td>
            </tr>
        </table>
      </div>
    </>
  )
}

export default PriceDiscoveryResult;