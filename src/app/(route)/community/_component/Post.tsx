/* eslint-disable @next/next/no-img-element */
import UserProfile from "@/app/(commons)/_component/UserProfile";
import { communityPostListState } from "@/app/_store/community/atoms";
import { formatTime } from "@/app/_utils/formatTime";
import { useRecoilValue } from "recoil";
import StatusBadge from "./StatusBadge";
import * as styles from "./_style/post.css";
import { useRouter } from "next/navigation";
import {NULL_INPUT_IMAGE_URL} from "@/app/_const/const";
import {inputImageDefaultImg} from "@/app/_utils/DefaultImage";

interface props {
  idx: number;
}

export default function Post({ idx }: props) {
  const commnityPostList = useRecoilValue(communityPostListState)[idx];
  const router = useRouter();
  const handleOnClick = (communityId: number) => {
    router.push(`/community/${communityId}`);
  };

  if (commnityPostList === undefined) return <></>;

  const {
    id,
    pickup_location: pickupLocation,
    status,
    dog_profile_url: dogProfileUrl,
    dog_type: dogType,
    dog_character: dogCharacter,
    description,
    created_at: createdAt,
    nickname,
    user_id: userId,
    profile_url: profileUrl,
  } = commnityPostList;

  return (
    <div onClick={() => handleOnClick(id)} className={styles.cardContainer}>
      <div className={styles.mainImageContainer}>
          <img
            src={dogProfileUrl || NULL_INPUT_IMAGE_URL}
            alt={`Dog Profile image ${id}`}
            className={dogProfileUrl ? styles.dogImage : styles.nullImage}
            onError={inputImageDefaultImg}
          />
      </div>
      <StatusBadge status={status} />
      <div className={styles.contentsContainer}>
        <p className={styles.address}>{pickupLocation}</p>
        <div className={styles.contents}>{description}</div>
        <p className={styles.dogBreed}>#{dogType}</p>
        <div className={styles.cardInfo}>
          <UserProfile
            nickname={nickname}
            profileUrl={profileUrl}
            userId={userId}
          />
          <p className={styles.date}>{formatTime(createdAt)}</p>
        </div>
      </div>
    </div>
  );
}
