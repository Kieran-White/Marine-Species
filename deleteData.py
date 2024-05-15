from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('mongodb://connorearneybs3221:IwT3a5xY75iviD3407DWDJBUPzcMYZPyCK6rdkSvhPPKnnkNDdHKNh9aVVwScgnBz6Es4EfTr1pxACDbg8AbXw==@connorearneybs3221.mongo.cosmos.azure.com:10255/universitywork?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@connorearneybs3221@')
db = client['universitywork']  # Change 'your_database_name' to your actual database name
collection = db['marinespecies']  # Change 'species' to your actual collection name

def delete_species_by_name():
    species_name = input("Enter the common name of the species to delete: ")

    # Define the filter to match documents with the specified species name
    filter = {'species': species_name}

    # Delete matching documents
    result = collection.delete_many(filter)
    
    # Print confirmation
    print(f"Number of documents deleted for species '{species_name}':", result.deleted_count)

delete_species_by_name()
