-- Adjustments made to fit PostgreSQL syntax and standards
CREATE TABLE containers (
    containerNumber varchar PRIMARY KEY,    -- Keeps the varchar type since it may contain alphanumeric values
    nameOfShip varchar,
    containerSize numeric,                  -- 'numeric' or 'float' based on precision requirements
    dateContainerShipped date               -- Use the 'date' type for dates
);

-- Insert sample data
INSERT INTO containers VALUES('123','COSCO Star',50,'2024-01-01');
INSERT INTO containers VALUES('456J','MAERSK Rock',25.60,'2024-03-08');
INSERT INTO containers VALUES('x1','Betty',34,'2024-05-14');

-- Create a unique index on the containerNumber column
CREATE UNIQUE INDEX idx_containers_containerNumber ON containers (containerNumber);
