<?php

    // 'user' model
    class User{
    
        // database connection and table name
        private $conn;
        private $table_name = "help";
        private $table_name1 = "risk";
    
        // model properties
        public $id;
        public $name;
        public $phone;
        public $address;
        public $complain;
    
        // constructor
        public function __construct($db){
            $this->conn = $db;
        }
    
        function create(){

            $query = "CREATE TABLE IF NOT EXISTS help (
                id INT(11) NOT NULL AUTO_INCREMENT,
                name VARCHAR(255) DEFAULT NULL,
                phone VARCHAR(255) DEFAULT NULL,
                address VARCHAR(255) DEFAULT NULL,
                complain VARCHAR(10000) DEFAULT NULL,
                created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (id)
            ) ";

            $stmt = $this->conn->prepare($query);

            if($stmt->execute()){
                // insert query
                $query = "INSERT INTO " . $this->table_name . "
                SET
                    name = :name,
                    phone = :phone,
                    address = :address,
                    complain = :complain";

                // prepare the query
                $stmt = $this->conn->prepare($query);

                // sanitize
                $this->name = htmlspecialchars(strip_tags($this->name));
                $this->phone = htmlspecialchars(strip_tags($this->phone));
                $this->address = htmlspecialchars(strip_tags($this->address));
                $this->complain = htmlspecialchars(strip_tags($this->complain));

                // bind the values
                $stmt->bindParam(':name', $this->name);
                $stmt->bindParam(':phone', $this->phone);
                $stmt->bindParam(':address', $this->address);
                $stmt->bindParam(':complain', $this->complain);

                // execute the query, also check if query was successful
                if($stmt->execute()){
                    return json_encode(array("status"=>"1", "message" => "Help Request Sent successfully"));
                }

                return json_encode(array("status"=>"0", "message" => "Help Request Not Sent"));
            }

            return json_encode(array("status"=>"0", "message" => "Help Request Not Sent"));
        }

        function risk(){

            $query = "CREATE TABLE IF NOT EXISTS risk (
                id INT(11) NOT NULL AUTO_INCREMENT,
                name VARCHAR(255) DEFAULT NULL,
                phone VARCHAR(255) DEFAULT NULL,
                address VARCHAR(255) DEFAULT NULL,
                created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (id)
            ) ";

            $stmt = $this->conn->prepare($query);

            if($stmt->execute()){
                // insert query
                $query = "INSERT INTO " . $this->table_name1 . "
                SET
                    name = :name,
                    phone = :phone,
                    address = :address";

                // prepare the query
                $stmt = $this->conn->prepare($query);

                // sanitize
                $this->name = htmlspecialchars(strip_tags($this->name));
                $this->phone = htmlspecialchars(strip_tags($this->phone));
                $this->address = htmlspecialchars(strip_tags($this->address));

                // bind the values
                $stmt->bindParam(':name', $this->name);
                $stmt->bindParam(':phone', $this->phone);
                $stmt->bindParam(':address', $this->address);

                // execute the query, also check if query was successful
                if($stmt->execute()){
                    return json_encode(array("status"=>"1", "message" => "Help Request Sent successfully"));
                }

                return json_encode(array("status"=>"0", "message" => "Help Request Not Sent"));
            }

            return json_encode(array("status"=>"0", "message" => "Help Request Not Sent"));
        }

    }

?>