import 'style/menu-item.css'

const MenuItem = (props) => (
    <div className='category-container'>
        <div className="background-image" style={{ backgroundImage: `url('${props.item.imageUrl}')`}}/>

        <div className='category-body-container'>
            <h1> {props.item.title} </h1>
            Shop Now
        </div>

    </div>
)

export default MenuItem;