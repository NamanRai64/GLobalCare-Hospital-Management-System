import sqlite3
import hashlib
import random
from datetime import datetime, timedelta
import os

# Database configuration
# Assuming the database is in the server directory as per .env
DB_PATH = os.path.join(os.path.dirname(__file__), '..', 'server', 'dev.db')
DB_PATH = os.path.abspath(DB_PATH)

def get_password_hash(password):
    """Simple SHA-256 hashing for demonstration purposes."""
    return hashlib.sha256(password.encode()).hexdigest()

def populate_security_section():
    print(f"Connecting to database at: {DB_PATH}")
    
    # Ensure the directory exists
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # 1. Create Tables (Security Section)
    print("Creating tables for security section...")
    cursor.executescript("""
    CREATE TABLE IF NOT EXISTS UserAccount (
        user_id BIGINT PRIMARY KEY,
        employee_id BIGINT,
        username VARCHAR(100),
        password_hash VARCHAR(255),
        account_status VARCHAR(50),
        last_login DATETIME,
        password_changed_at DATETIME
        -- FOREIGN KEY (employee_id) REFERENCES Employee(employee_id)
    );

    CREATE TABLE IF NOT EXISTS Role (
        role_id BIGINT PRIMARY KEY,
        role_name VARCHAR(100)
    );

    CREATE TABLE IF NOT EXISTS UserRole (
        user_id BIGINT,
        role_id BIGINT,
        PRIMARY KEY (user_id, role_id),
        FOREIGN KEY (user_id) REFERENCES UserAccount(user_id),
        FOREIGN KEY (role_id) REFERENCES Role(role_id)
    );

    CREATE TABLE IF NOT EXISTS AuditLog (
        log_id BIGINT PRIMARY KEY,
        user_id BIGINT,
        action VARCHAR(255),
        log_time DATETIME,
        old_value VARCHAR(100),
        new_value VARCHAR(100),
        FOREIGN KEY (user_id) REFERENCES UserAccount(user_id)
    );
    """)

    # 2. Populate Roles
    print("Populating roles...")
    roles = [
        (1, 'ADMIN'),
        (2, 'DOCTOR'),
        (3, 'NURSE'),
        (4, 'PHARMACIST'),
        (5, 'RECEPTIONIST'),
        (6, 'IT_ADMIN'),
        (7, 'HR_MANAGER'),
        (8, 'LAB_TECHNICIAN')
    ]
    cursor.executemany("INSERT OR IGNORE INTO Role (role_id, role_name) VALUES (?, ?)", roles)

    # 3. Populate User Accounts
    # We'll generate users for some dummy employee IDs (10001 to 10050)
    print("Populating user accounts...")
    users = []
    statuses = ['ACTIVE', 'ACTIVE', 'ACTIVE', 'LOCKED', 'DEACTIVATED']
    
    for i in range(1, 31):  # Create 30 users
        user_id = 1000 + i
        employee_id = 10000 + i  # Assumed employee IDs
        username = f"user_{employee_id}"
        pass_hash = get_password_hash(f"password_{employee_id}")
        status = random.choice(statuses)
        
        # Random dates within the last 30 days
        last_login = datetime.now() - timedelta(days=random.randint(0, 30), hours=random.randint(0, 23))
        pwd_changed = last_login - timedelta(days=random.randint(30, 90))
        
        users.append((
            user_id, 
            employee_id, 
            username, 
            pass_hash, 
            status, 
            last_login.strftime('%Y-%m-%d %H:%M:%S'), 
            pwd_changed.strftime('%Y-%m-%d %H:%M:%S')
        ))

    cursor.executemany("""
        INSERT OR IGNORE INTO UserAccount 
        (user_id, employee_id, username, password_hash, account_status, last_login, password_changed_at) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    """, users)

    # 4. Assign Roles to Users
    print("Assigning roles to users...")
    user_role_assignments = []
    for user_id, *_ in users:
        # Every user gets at least one role
        num_roles = random.choice([1, 1, 1, 2]) # Mostly 1 role, occasionally 2
        assigned = random.sample(range(1, 9), num_roles)
        for rid in assigned:
            user_role_assignments.append((user_id, rid))
            
    cursor.executemany("INSERT OR IGNORE INTO UserRole (user_id, role_id) VALUES (?, ?)", user_role_assignments)

    # 5. Populate Audit Logs
    print("Populating audit logs...")
    audit_actions = [
        'USER_LOGIN', 'USER_LOGOUT', 'PASSWORD_CHANGE', 
        'ROLE_ASSIGNMENT', 'RECORD_ACCESS', 'SYSTEM_CONFIG_UPDATE', 
        'PATIENT_DATA_MODIFIED', 'BILL_GENERATED'
    ]
    
    logs = []
    for i in range(1, 151):  # Create 150 audit entries
        log_id = 5000 + i
        target_user = random.choice(users)[0]
        action = random.choice(audit_actions)
        log_time = datetime.now() - timedelta(days=random.randint(0, 15), hours=random.randint(0, 23), minutes=random.randint(0, 59))
        
        old_val = "N/A"
        new_val = "N/A"
        if action == 'PASSWORD_CHANGE':
            old_val = "*******"
            new_val = "*******"
            
        logs.append((
            log_id, 
            target_user, 
            action, 
            log_time.strftime('%Y-%m-%d %H:%M:%S'), 
            old_val, 
            new_val
        ))

    cursor.executemany("""
        INSERT OR IGNORE INTO AuditLog 
        (log_id, user_id, action, log_time, old_value, new_value) 
        VALUES (?, ?, ?, ?, ?, ?)
    """, logs)

    conn.commit()
    
    # Final Summary
    cursor.execute("SELECT COUNT(*) FROM UserAccount")
    acc_count = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(*) FROM Role")
    role_count = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(*) FROM AuditLog")
    log_count = cursor.fetchone()[0]
    
    print("-" * 30)
    print("Population Complete!")
    print(f"Total Users: {acc_count}")
    print(f"Total Roles: {role_count}")
    print(f"Total Audit Logs: {log_count}")
    print("-" * 30)
    
    conn.close()

if __name__ == "__main__":
    populate_security_section()
