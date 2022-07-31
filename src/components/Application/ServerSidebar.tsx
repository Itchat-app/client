import { Fragment } from "preact";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import styles from "../styles/Application/ServerSidebar.module.scss";
import { SdButton } from "./utils";
let max = 7;
let left = 4;

interface IChannelResolve {
  name: string;
  id: string;
  category: {
    id: string;
    name: string;
  };
}

type IChannel<S extends boolean = false> = S extends true
  ? Omit<IChannel, 'category'> & Partial<Pick<IChannel, 'category'>>
  : IChannelResolve;

function BgBlob() {
  return (
    <svg
      class={styles.bgBlob}
      width="94"
      height="62"
      viewBox="0 0 94 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="80.936"
        cy="57.5822"
        r="3.25176"
        transform="rotate(-165 80.936 57.5822)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="86.8272"
        cy="35.5955"
        r="3.25176"
        transform="rotate(-165 86.8272 35.5955)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="36.9625"
        cy="45.7996"
        r="3.25176"
        transform="rotate(-165 36.9625 45.7996)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="42.854"
        cy="23.8129"
        r="3.25176"
        transform="rotate(-165 42.854 23.8129)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="83.8816"
        cy="46.5889"
        r="3.25176"
        transform="rotate(-165 83.8816 46.5889)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="89.773"
        cy="24.6022"
        r="3.25176"
        transform="rotate(-165 89.773 24.6022)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="39.9083"
        cy="34.8063"
        r="3.25176"
        transform="rotate(-165 39.9083 34.8063)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="45.7995"
        cy="12.8196"
        r="3.25176"
        transform="rotate(-165 45.7995 12.8196)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="69.9426"
        cy="54.6366"
        r="3.25176"
        transform="rotate(-165 69.9426 54.6366)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="75.834"
        cy="32.6499"
        r="3.25176"
        transform="rotate(-165 75.834 32.6499)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="25.9692"
        cy="42.8539"
        r="3.25176"
        transform="rotate(-165 25.9692 42.8539)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="31.8606"
        cy="20.8673"
        r="3.25176"
        transform="rotate(-165 31.8606 20.8673)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="72.8883"
        cy="43.6432"
        r="3.25176"
        transform="rotate(-165 72.8883 43.6432)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="78.7796"
        cy="21.6565"
        r="3.25176"
        transform="rotate(-165 78.7796 21.6565)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="28.9149"
        cy="31.8606"
        r="3.25176"
        transform="rotate(-165 28.9149 31.8606)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="34.8063"
        cy="9.8739"
        r="3.25176"
        transform="rotate(-165 34.8063 9.8739)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="58.9493"
        cy="51.6909"
        r="3.25176"
        transform="rotate(-165 58.9493 51.6909)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="64.8406"
        cy="29.7042"
        r="3.25176"
        transform="rotate(-165 64.8406 29.7042)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="14.9759"
        cy="39.9083"
        r="3.25176"
        transform="rotate(-165 14.9759 39.9083)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="20.8672"
        cy="17.9216"
        r="3.25176"
        transform="rotate(-165 20.8672 17.9216)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="61.895"
        cy="40.6976"
        r="3.25176"
        transform="rotate(-165 61.895 40.6976)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="67.7862"
        cy="18.7109"
        r="3.25176"
        transform="rotate(-165 67.7862 18.7109)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="17.9215"
        cy="28.9149"
        r="3.25176"
        transform="rotate(-165 17.9215 28.9149)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="23.8128"
        cy="6.92824"
        r="3.25176"
        transform="rotate(-165 23.8128 6.92824)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="47.9559"
        cy="48.7453"
        r="3.25176"
        transform="rotate(-165 47.9559 48.7453)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="53.8473"
        cy="26.7586"
        r="3.25176"
        transform="rotate(-165 53.8473 26.7586)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="3.98252"
        cy="36.9626"
        r="3.25176"
        transform="rotate(-165 3.98252 36.9626)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="9.87388"
        cy="14.9759"
        r="3.25176"
        transform="rotate(-165 9.87388 14.9759)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="50.9016"
        cy="37.7519"
        r="3.25176"
        transform="rotate(-165 50.9016 37.7519)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="56.7929"
        cy="15.7652"
        r="3.25176"
        transform="rotate(-165 56.7929 15.7652)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="6.9282"
        cy="25.9693"
        r="3.25176"
        transform="rotate(-165 6.9282 25.9693)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
      <circle
        cx="12.8194"
        cy="3.98258"
        r="3.25176"
        transform="rotate(-165 12.8194 3.98258)"
        fill="#4762D3"
        fill-opacity="0.1"
      />
    </svg>
  );
}

function StatusBar() {
  return (
    <svg
      class={styles.statusbar}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.16686 0C9.89614 0 10.504 0.605279 10.504 1.35677V9.64323C10.504 10.3946 9.89614 11 9.16686 11C8.43758 11 7.84998 10.3947 7.84998 9.64323V1.35677C7.84998 0.605403 8.43746 0 9.16686 0Z"
        fill="#D1D1D3"
        fill-opacity="0.8"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.04574 2.89425C5.81766 2.89425 6.46101 3.49373 6.46101 4.23802V9.65436C6.46101 10.3985 5.81766 10.9981 5.04574 10.9981C4.29521 10.9981 3.65186 10.3987 3.65186 9.65436V4.23802C3.65186 3.49385 4.29521 2.89425 5.04574 2.89425Z"
        fill="#FFF500"
        fill-opacity="0.8"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.26412 4.9202C1.96418 4.9202 2.52824 5.53834 2.52824 6.25945V9.65887C2.52824 10.4005 1.96429 10.9981 1.26412 10.9981C0.56406 10.9981 0 10.4007 0 9.65887V6.25945C0 5.53834 0.563944 4.9202 1.26412 4.9202Z"
        fill="#FFF500"
        fill-opacity="0.8"
      />
    </svg>
  );
}

function User() {
  return (
    <div class={styles.user}>
      <div class={styles.user_container}>
        <div class={styles.avatar}>
          <img
            src="https://images-ext-1.discordapp.net/external/1b65hsb3rYWm7Gea8SgVC3jTgI7255Fy7UbXRbpVgPk/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/508449321176268801/bc2e9d1dc008fe7153464a5b29362dc4.png"
            alt=""
          />
        </div>
        <div class={styles.name}>
          <div class={styles.username}>Mr.Kasper</div>
          <div class={styles.status}>Hello world!</div>
        </div>
        <div class={styles.buttons}>
          <SdButton
            icon={() => (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.69338 1.68005C2.72002 0.573315 4.17336 0 6.00011 0C7.82672 0 9.28006 0.573315 10.3066 1.68005C12.2132 3.74666 11.9999 6.94667 11.9866 7.20007V10.4533C11.9866 11.3067 11.2933 12 10.4399 12H9.35999C8.50667 12 7.81337 11.3067 7.81337 10.4533L7.81326 7.18655C7.81326 6.33321 8.50656 5.6399 9.35988 5.6399H10.1598C10.1198 5.19987 9.98653 4.35985 9.54651 3.55986C8.83979 2.2798 7.65315 1.62653 5.99994 1.62653C4.34674 1.62653 3.16004 2.27991 2.45337 3.55986C2.01335 4.35985 1.88007 5.19987 1.84004 5.6399H2.64001C3.49333 5.6399 4.18662 6.33321 4.18662 7.18655V10.4533C4.18662 11.3067 3.49333 12 2.64001 12H1.56004C0.706723 12 0.0134296 11.3067 0.0134296 10.4533V7.20007C0.000122339 6.94667 -0.213291 3.74661 1.69338 1.68005Z"
                  fill="#AFAFB4"
                />
              </svg>
            )}
          />

          <SdButton
            icon={() => (
              <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9685 3.90469C11.0437 4.10625 10.9799 4.33359 10.8249 4.48125L9.83787 5.40469C9.86295 5.59922 9.87662 5.79844 9.87662 6C9.87662 6.20156 9.86295 6.40078 9.83787 6.59531L10.8249 7.51875C10.9799 7.66641 11.0437 7.89375 10.9685 8.09531C10.8682 8.37422 10.7474 8.64375 10.6106 8.89922L10.5035 9.08906C10.353 9.34687 10.1843 9.59062 9.99971 9.82266C9.86295 9.98906 9.64185 10.0477 9.44126 9.98203L8.17163 9.56484C7.86619 9.80625 7.50832 10.0078 7.16869 10.1625L6.88376 11.5008C6.83818 11.7117 6.67862 11.8617 6.46891 11.918C6.15435 11.9719 5.83068 12 5.47965 12C5.16965 12 4.84597 11.9719 4.53142 11.918C4.32171 11.8617 4.16215 11.7117 4.11656 11.5008L3.83164 10.1625C3.47149 10.0078 3.13414 9.80625 2.8287 9.56484L1.55998 9.98203C1.35848 10.0477 1.13624 9.98906 1.0013 9.82266C0.81644 9.59062 0.647764 9.34687 0.497323 9.08906L0.390647 8.89922C0.252287 8.64375 0.131934 8.37422 0.0309562 8.09531C-0.0428966 7.89375 0.0193312 7.66641 0.175698 7.51875L1.16177 6.59531C1.1367 6.40078 1.1237 6.20156 1.1237 6C1.1237 5.79844 1.1367 5.59922 1.16177 5.40469L0.175698 4.48125C0.0193312 4.33359 -0.0428966 4.10859 0.0309562 3.90469C0.131934 3.62578 0.252515 3.35625 0.390647 3.10078L0.497095 2.91094C0.647764 2.65312 0.81644 2.40937 1.0013 2.17852C1.13624 2.01094 1.35848 1.95281 1.55998 2.01891L2.8287 2.43516C3.13414 2.19281 3.47149 1.99125 3.83164 1.8382L4.11656 0.499922C4.16215 0.287109 4.32171 0.118125 4.53142 0.0822656C4.84597 0.0281484 5.16965 0 5.50016 0C5.83068 0 6.15435 0.0281484 6.46891 0.0822656C6.67862 0.118125 6.83818 0.287109 6.88376 0.499922L7.16869 1.8382C7.50832 1.99125 7.86619 2.19281 8.17163 2.43516L9.44126 2.01891C9.64185 1.95281 9.86295 2.01094 9.99971 2.17852C10.1843 2.40937 10.353 2.65312 10.5035 2.91094L10.6106 3.10078C10.7474 3.35625 10.8682 3.62578 10.9685 3.90469ZM5.50016 7.875C6.50766 7.875 7.32369 7.03594 7.32369 5.97891C7.32369 4.96406 6.50766 4.10391 5.50016 4.10391C4.49267 4.10391 3.67664 4.96406 3.67664 5.97891C3.67664 7.03594 4.49267 7.875 5.50016 7.875Z"
                  fill="#AFAFB4"
                />
              </svg>
            )}
          />

          <SdButton
            icon={() => (
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8.25C5.20523 8.25 6.18182 7.24289 6.18182 6V2.25C6.18182 1.00711 5.20523 0 4 0C2.79477 0 1.81818 1.00711 1.81818 2.25V6C1.81818 7.24219 2.775 8.25 4 8.25ZM7.45455 4.5C7.15227 4.5 6.90909 4.75078 6.90909 5.04141V6C6.90909 7.71867 5.50068 9.10313 3.81136 8.99297C2.30955 8.89526 1.09091 7.43227 1.09091 5.88047V5.04141C1.09091 4.75078 0.846591 4.5 0.545455 4.5C0.244318 4.5 0 4.75078 0 5.04141V5.79492C0 7.89633 1.45386 9.76992 3.45455 10.0535V10.875H2.54545C2.13205 10.875 1.79909 11.2308 1.81909 11.6618C1.82795 11.8547 1.99545 12 2.18182 12H5.81818C6.00505 12 6.17205 11.8543 6.18091 11.6618C6.2 11.2312 5.86818 10.875 5.45455 10.875H4.54545V10.0835C6.49318 9.80859 8 8.08359 8 6V5.04141C8 4.75078 7.75682 4.5 7.45455 4.5Z"
                  fill="#AFAFB4"
                />
              </svg>
            )}
          />
        </div>
      </div>
    </div>
  );
}

function Channel({ channel }: { channel: IChannel<true> }) {
  return <div class={`${styles.channel}`}>
    {/* TODO: add coustom icon */}
    <div class={styles.icon}>#</div>
    <div class={styles.name}>{channel.name}</div>
  </div>;
}

function Channels({ channels }: { channels: IChannel[] | IChannel<true>[] }) {
    return  (
      <Fragment>
        {channels.map((channel) => {
        return (
          <Channel channel={channel} />
        )
      })}
      </Fragment>
    )
}

function Category({ channels, name }: { channels: IChannel<true>[], name: string }) {
  return <div class={styles.category}>
    <div class={styles.title}>{name}</div>
    <Channels channels={channels} />
  </div>;
}

function reduceChannels(acc: any, channel: IChannel) {
  if (channel.category?.id) {
    if (!acc[channel.category.id]) {
      acc[channel.category.id] = {name: channel.category.name, channels: []};
    }
    acc[channel.category.id].channels.push(channel);
  } else {
    if (!acc["default"]) {
      acc["default"] = {name: "default", channels: []};
    }
    acc.default.channels.push(channel);
  }
  return acc;
}

function ChannelsAdapter({ channels }: { channels: IChannel[] }) {
  const categories = channels.reduce(reduceChannels, {});
  console.log(categories)
  return (
    <div class={styles.container}>
      {Object.keys(categories).map((id) => {
        const category_channels = categories[id];
        return id !== "default" && <Category name={category_channels.name} channels={category_channels.channels} />;
      })}
    </div>
  );
}

export function ServerSidebar() {
  const [voice, setVoice] = useState(true);
  const [voiceUsers, setVoiceUsers] = useState(Array(max + 10).fill(0));
  return (
    <div class={styles.container}>
      <div class={styles.up_container}>
        <ChannelsAdapter
          channels={[
            ...Array(10).fill({ name: "test3123", category: { id: "test", "name": "WELCOME" } }),
            ...Array(10).fill({ name: "test1232", category: null }),
          ]}
        />
      </div>
      <div class={styles.down_container}>
        {voice ? (
          <div class={styles.voice}>
            <div class={styles.channel}>
              <div class={styles.container}>
                <BgBlob />
                <div class={styles.details}>
                  <div className={styles.title}>
                    <StatusBar />
                    <div class={styles.head}>
                      <span class={styles.span_server}>ITCHAT COMMUNITY</span>
                      <span class={styles.span_channel}>/Voiceroom</span>
                    </div>
                    <div class={styles.button}>
                      <SdButton
                        icon={() => (
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.83731 2.67847C7.66526 2.51715 7.38573 2.52797 7.22451 2.69993L1.24662 9.22632C1.0853 9.39837 1.09612 9.67791 1.26808 9.83912C1.3541 9.91441 1.45086 9.95742 1.55834 9.95742C1.67664 9.95742 1.79486 9.91441 1.87014 9.81766L7.85893 3.30216C8.03097 3.10857 8.02024 2.83977 7.83747 2.67845L7.83731 2.67847Z"
                              fill="#FF4949"
                              fill-opacity="0.5"
                            />
                            <path
                              d="M2.4399 6.85012C2.52593 6.85012 2.62268 6.81784 2.69797 6.7641C2.89147 6.62434 2.92375 6.35554 2.78399 6.16202C1.22503 4.11922 1.87011 2.56021 1.89156 2.5064L1.91302 2.46339C1.99905 2.19459 2.26785 1.90433 2.36461 1.81831C2.46136 1.72156 2.50437 1.73229 2.54738 1.78603L3.73007 2.91498C3.76235 2.93644 3.77308 2.95799 3.77308 2.96872C3.77308 2.96872 3.77308 2.97945 3.76235 2.97945L3.26776 3.54934C3.0097 3.83959 2.96668 4.25898 3.14946 4.59226C3.24622 4.77504 3.36452 4.95783 3.472 5.12987C3.60104 5.32337 3.86982 5.37712 4.07408 5.24817C4.26759 5.11914 4.32134 4.85035 4.19238 4.64609C4.09563 4.49559 3.99888 4.345 3.90213 4.18379C3.8914 4.16233 3.8914 4.14078 3.91286 4.11932L4.3967 3.571C4.46117 3.50653 4.64396 3.28074 4.63322 2.94737C4.63322 2.77533 4.56875 2.52808 4.31068 2.29156L3.18174 1.18391C3.10644 1.09788 2.88065 0.882821 2.52592 0.872105C2.34314 0.861374 2.05288 0.904386 1.77327 1.17319C1.71953 1.2162 1.26795 1.64623 1.09591 2.17309C0.988425 2.43116 0.311071 4.3342 2.09581 6.67802C2.18184 6.79633 2.31087 6.85007 2.4399 6.85007L2.4399 6.85012Z"
                              fill="#FF4949"
                              fill-opacity="0.5"
                            />
                            <path
                              d="M9.65412 7.36639L8.52518 6.2912C8.26711 6.03314 8.01986 5.99012 7.84782 5.99012C7.52528 6.00085 7.2995 6.19435 7.23502 6.24818L6.70815 6.7535C6.68669 6.78578 6.66514 6.78578 6.64368 6.77505C6.43944 6.6783 6.24586 6.55999 6.05234 6.44177C5.8481 6.31274 5.59004 6.36648 5.461 6.57081C5.33196 6.77504 5.38571 7.0331 5.59003 7.16215C5.80509 7.30191 6.04162 7.43095 6.2674 7.54925C6.61148 7.7213 7.03078 7.65674 7.31032 7.38794L7.84792 6.8719L7.86939 6.85044C7.88012 6.85044 7.90167 6.8719 7.93386 6.90418L9.08426 8.00085L9.11654 8.03313C9.11654 8.03313 9.14882 8.07614 9.14882 8.0976C9.14882 8.10833 9.13809 8.15134 9.07353 8.22663C8.9875 8.32339 8.7187 8.60291 8.4499 8.69967L8.39616 8.72104C8.38543 8.73177 6.82637 9.48443 4.6654 7.9792C4.47189 7.83944 4.2031 7.89318 4.06332 8.08669C3.92355 8.28019 3.97729 8.54899 4.1708 8.68877C5.40722 9.55963 6.50398 9.78543 7.32105 9.78543C8.11672 9.78543 8.63276 9.57037 8.7618 9.50591C9.27784 9.31241 9.68642 8.83929 9.71868 8.78555C9.97674 8.48447 10.0089 8.20495 9.9982 8.01143C9.95527 7.66743 9.72949 7.44163 9.6542 7.36644L9.65412 7.36639Z"
                              fill="#FF4949"
                              fill-opacity="0.5"
                            />
                          </svg>
                        )}
                      />
                    </div>
                  </div>
                  <div className={styles.timer}>00:00:00</div>
                </div>
                <div class={styles.members}>
                  {voiceUsers.slice(0, max).map((user, i) => (
                    <img
                      style={{ position: "relative", left: `${-left * i}px` }}
                      src="https://images-ext-1.discordapp.net/external/1b65hsb3rYWm7Gea8SgVC3jTgI7255Fy7UbXRbpVgPk/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/508449321176268801/bc2e9d1dc008fe7153464a5b29362dc4.png"
                      alt=""
                    />
                  ))}
                  {voiceUsers.slice(0, max).length < voiceUsers.length ? (
                    <div
                      style={{
                        position: "relative",
                        left: `${-left * voiceUsers.slice(0, max).length}px`,
                      }}
                    >
                      +{voiceUsers.length - voiceUsers.slice(0, max).length}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div class={styles.status}>VOICE CONNECTED</div>
          </div>
        ) : (
          ""
        )}
        <User />
      </div>
    </div>
  );
}
