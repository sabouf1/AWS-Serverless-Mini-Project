import os

def copy_file_contents_to_single_file(input_path, output_file):
    with open(output_file, 'w') as outfile:
        for root, dirs, files in os.walk(input_path):
            for filename in files:
                # Write the file name
                outfile.write(f"\n\n--- File: {os.path.join(root, filename)} ---\n\n")
                
                # Write the file content
                with open(os.path.join(root, filename), 'r') as infile:
                    outfile.write(infile.read())

if __name__ == "__main__":
    input_directory = 'C:/Users/Said/Desktop/Cloud project/API Projects/web_app/'  
    output_file_path = 'output.txt'    

    copy_file_contents_to_single_file(input_directory, output_file_path)
    print(f"Contents copied to {output_file_path}")
