import styles from './SnackForm.module.css';
import { useState, useEffect } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });

  useEffect(() => {
    if (editingSnack) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
    }
    setTouched({ name: false, rating: false });
  }, [editingSnack]);

  function validateName() {
    return name.trim() !== '';
  }

  function validateRating() {
    return rating !== '';
  }

  function getNameError() {
    return !validateName() && touched.name ? 'Snack name is required' : '';
  }

  function getRatingError() {
    return !validateRating() && touched.rating ? 'Please select a rating' : '';
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateName() || !validateRating()) {
      setTouched({
        name: true,
        rating: true,
      });

      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      setName('');
      setRating('');
      setTouched({
        name: false,
        rating: false,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          className={styles['field-input']}
          placeholder="Enter snack name"
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
        />
        {getNameError() && <div className={styles.error}>{getNameError()}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
          onChange={(e) => setRating(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
        />
        {getRatingError() && (
          <div className={styles.error}>{getRatingError()}</div>
        )}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );

  //*****------CONTROLLED COMPONENT VERSION------*****

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const name = formData.get('name');
  //   const rating = formData.get('rating');

  //   if (isEditing) {
  //     updateSnack(editingSnack.id, name, rating);
  //   } else {
  //     addSnack(name, rating);
  //     e.target.reset();
  //   }
  // }

  // return (
  //   <form
  //     onSubmit={handleSubmit}
  //     className={`${styles.form} ${className || ''}`}
  //   >
  //     <h3 className={styles['form-title']}>
  //       {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
  //     </h3>

  //     <div className={styles['field-container']}>
  //       <label className={styles['field-label']}>Name:</label>
  //       <input
  //         type="text"
  //         name="name"
  //         defaultValue={isEditing ? editingSnack.name : ''}
  //         required
  //         className={styles['field-input']}
  //         placeholder="Enter snack name"
  //       />
  //     </div>

  //     <div className={styles['field-container']}>
  //       <label className={styles['field-label']}>Rating:</label>
  //       <input
  //         type="number"
  //         name="rating"
  //         defaultValue={isEditing ? editingSnack.rating : ''}
  //         required
  //         min="1"
  //         max="5"
  //         className={styles['field-input']}
  //         placeholder="Rate 1-5"
  //       />
  //     </div>

  //     <div className={styles['button-container']}>
  //       <button
  //         type="submit"
  //         className={`${styles.button} ${styles['submit-button']}`}
  //       >
  //         {isEditing ? 'Save' : 'Add'}
  //       </button>

  //       {isEditing && (
  //         <button
  //           type="button"
  //           onClick={cancelEdit}
  //           className={`${styles.button} ${styles['cancel-button']}`}
  //         >
  //           Cancel
  //         </button>
  //       )}
  //     </div>
  //   </form>
  // );
}
