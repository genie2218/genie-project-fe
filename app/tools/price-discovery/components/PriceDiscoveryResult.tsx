"use client"

import styles from '../styles.module.scss';
import LeftArrow from '@/app/components/LeftArrow';

interface IPriceDiscoveryResult {
  heading: string,
  subHeading: string,
  handleChange: () => void,
  results: any,
}

const PriceDiscoveryResult = (props: IPriceDiscoveryResult) => {
  const {
    heading,
    subHeading,
    handleChange,
    results,
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
          <p>{!results?.minSize && !results?.maxSize && '--'}{results?.minSize} {results.minSize && results?.maxSize && 'to'} {results?.maxSize}</p>
        </div>
        <div className={styles.detail}>
          <h4>{`Budget (in crores)`}</h4>
          <p>{!results?.minBudget && !results?.maxBudget && '--'}{results?.minBudget && `₹${results?.minBudget}cr`} {results?.minBudget && results?.maxBudget && 'to'} {results?.maxBudget && `₹${results?.maxBudget}cr`}</p>
        </div>
        <div className={styles.detail}>
          <h4>{`Builder Type`}</h4>
          <p>{results?.builder?.label || '--'}</p>
        </div>
        <div className={styles.detail}>
          <h4>{`Floor Preference`}</h4>
          <p>{results?.floor?.label || '--'}</p>
        </div>
      </div>
      <div className={styles.results}>
        <table>
            <tr>
              <th>Locality</th>
              <th>Size</th>
              <th>Low (₹ in crores)</th>
              <th>High (₹ in crores)</th>
            </tr>
            {
              results?.localities?.map((l: any) => (
                <tr>
                  <td>{l?.localityName}</td>
                  <td>{l?.plotSizes}</td>
                  <td>{l?.minPrice}</td>
                  <td>{l?.maxPrice}</td>
                </tr>
              ))
            }
        </table>
        {
          results?.localities.length === 0 && (
            <div className={styles.noData}>
              <h1><center>No matching Localities found</center></h1>
              <p><center>Try with other data</center></p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default PriceDiscoveryResult;