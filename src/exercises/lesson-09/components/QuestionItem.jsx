import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);

  const { state, dispatch } = useContext(SurveyContext);

  const isEditing = state.ui.editingQuestionId === question.id;

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  const handleEdit = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: isEditing ? null : question.id },
    });
  };

  const handleSave = () => {
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: { questionId: question.id, newText: workingText },
    });
  };

  const handleCancel = () => {
    setWorkingText(question.question);
    dispatch({ type: 'SET_EDITING_QUESTION', payload: { questionId: null } });
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this question?'
    );

    if (!confirmed) {
      return;
    }
    dispatch({ type: 'DELETE_QUESTION', payload: { id: question.id } });
  };

  const handleAddOption = () => {
    const newOption = window.prompt('Enter a new option:');

    if (newOption === null || !newOption.trim()) {
      return;
    }
    dispatch({
      type: 'ADD_OPTION_TO_QUESTION',
      payload: { questionId: question.id, optionText: newOption },
    });
  };

  const handleUpdateOption = (optionIndex) => {
    const newOption = window.prompt(
      'Edit new option:',
      question.options[optionIndex]
    );

    if (newOption === null || !newOption.trim()) {
      return;
    }
    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: question.id,
        optionIndex,
        newText: newOption.trim(),
      },
    });
  };

  const handleDeleteOption = (optionIndex) => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: { questionId: question.id, optionIndex },
    });
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className={styles['question-content']}>
        {isEditing ? (
          <div>
            <input
              className={styles['question-input']}
              type="text"
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
            />
            <button
              className={styles['save-btn']}
              type="button"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className={styles['cancel-btn']}
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                <span className={styles['option-text']}>{option}</span>

                <button
                  type="button"
                  className={styles['edit-btn']}
                  onClick={() => handleUpdateOption(index)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className={styles['delete-btn']}
                  onClick={() => handleDeleteOption(index)}
                  disabled={question.options.length <= 2}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={styles['add-option-btn']}
            onClick={handleAddOption}
          >
            + Add Option
          </button>
        </div>
      )}
    </div>
  );
}
