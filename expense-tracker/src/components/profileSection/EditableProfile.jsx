import React, { useState, useEffect } from "react";
import styles from "./EditableProfile.module.css";

export default function EditableProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Your Name",
    email: "your@email.com",
    budget: "50000",
    currency: "₹",
    avatar: ""
  });

  // Load saved profile from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("profileData");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  // Save changes to localStorage
  const saveProfile = () => {
    localStorage.setItem("profileData", JSON.stringify(profile));
    setIsEditing(false);
  };

  // Handle picture upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setProfile({ ...profile, avatar: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.profileCard}>
      <div className={styles.profileHeader}>
       

        <div>
          {isEditing ? (
            <>
              <input
                type="text"
                value={profile.name}
                className={styles.input}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
              />
              <input
                type="email"
                value={profile.email}
                className={styles.input}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />
            </>
          ) : (
            <>
              <h2 className={styles.name}>{profile.name}</h2>
              <p className={styles.email}>{profile.email}</p>
            </>
          )}
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.item}>
          <span className={styles.label}>Monthly Budget:</span>

          {isEditing ? (
            <input
              type="number"
              value={profile.budget}
              className={styles.input}
              onChange={(e) =>
                setProfile({ ...profile, budget: e.target.value })
              }
            />
          ) : (
            <span className={styles.value}>₹{profile.budget}</span>
          )}
        </div>

        <div className={styles.item}>
          <span className={styles.label}>Currency:</span>

          {isEditing ? (
            <select
              className={styles.input}
              value={profile.currency}
              onChange={(e) =>
                setProfile({ ...profile, currency: e.target.value })
              }
            >
              <option value="₹">₹ INR</option>
              <option value="$">$ USD</option>
              <option value="€">€ EUR</option>
            </select>
          ) : (
            <span className={styles.value}>{profile.currency}</span>
          )}
        </div>
      </div>

      {isEditing ? (
        <button className={styles.saveBtn} onClick={saveProfile}>
          Save Profile
        </button>
      ) : (
        <button
          className={styles.editBtn}
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
}