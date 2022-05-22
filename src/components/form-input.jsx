import 'style/form-input.scss'

const FormInput = ({label, ...otherProps}) => (
    <div className='group'>
        <input {...otherProps} className="form-input"/>
        {label && (
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label} 
            </label>
        )}
    </div>
)

export default FormInput;
