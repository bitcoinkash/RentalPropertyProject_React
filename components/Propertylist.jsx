const properties =  [

    {'id': 1, 'name': 'Cozy Cabin', 'rating': 4.5, 'price': "$100 a night"},
    {'id': 2, 'name': 'Beachfront Villa', 'rating': 4.8, 'price': "$200 a night"},
    {'id': 3, 'name': 'Luxury Penthouse', 'rating': 5.0, 'price': "$300 a night"},
    {'id': 4, 'name': 'Quaint Cottage', 'rating': 4.2, 'price': "$400 a night"},
    {'id': 5, 'name': 'Modern Apartment', 'rating': 4.7, 'price': "$500 a night"},
    {'id': 6, 'name': 'Lakefront Chalet', 'rating': 4.6, 'price': "$600 a night"}
   
   ];


export default function Propertylist() {
    return(

        <ol className="property-list"> 
        {properties.map ( i => <ul key={i.id}>
          <strong>{i.name} <p></p> {i.price} <p></p>  {i.rating}{`⭐`}</strong>
           </ul>)}
        </ol>



    )
}
