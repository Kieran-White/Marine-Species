from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('mongodb://connorearneybs3221:IwT3a5xY75iviD3407DWDJBUPzcMYZPyCK6rdkSvhPPKnnkNDdHKNh9aVVwScgnBz6Es4EfTr1pxACDbg8AbXw==@connorearneybs3221.mongo.cosmos.azure.com:10255/universitywork?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@connorearneybs3221@')
db = client['universitywork']  # Change 'your_database_name' to your actual database name
collection = db['marinespecies']  # Change 'species' to your actual collection name

def add_species():
    common_name = input("Enter common name: ")
    scientific_name = input("Enter scientific name: ")
    species_img = input("Enter species image URL: ")
    endanger_level = int(input("Enter endanger level (1-5): "))
    length = input("Enter length: ")
    information = input("Enter information: ")
    habitats = input("Enter habitats (separated by comma): ").split(',')

    # Create document
    new_species = {
        'species': common_name,
        'scientificName': scientific_name,
        'speciesImg': species_img,
        'endangerLevel': endanger_level,
        'length': length,
        'information': information,
        'habitats': habitats
    }

    # Insert document into collection
    result = collection.insert_one(new_species)
    
    # Print confirmation
    print("Species added with ID:", result.inserted_id)

add_species()
