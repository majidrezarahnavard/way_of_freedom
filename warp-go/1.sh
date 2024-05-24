#!/bin/sh

RED="\033[31m"
GREEN="\033[32m"
YELLOW="\033[33m"
PLAIN='\033[0m'

red(){
    echo -e "\033[31m\033[01m$1\033[0m"
}

green(){
    echo -e "\033[32m\033[01m$1\033[0m"
}

yellow(){
    echo -e "\033[33m\033[01m$1\033[0m"
}

rm -f warp.conf proxy.json

chmod +x ./warp-go ./warp-api
clear
yellow "请选择需要使用的 WARP 账户类型"
echo ""
echo -e " ${GREEN}1.${PLAIN} WARP 免费账户 ${YELLOW}(默认)${PLAIN}"
echo -e " ${GREEN}2.${PLAIN} WARP+"
echo -e " ${GREEN}3.${PLAIN} WARP Teams"
echo ""
read -p "请输入选项 [1-3]: " account_type
if [[ $account_type == 2 ]]; then
  yellow "获取 CloudFlare WARP 账号密钥信息方法: "
  green "电脑: 下载并安装 CloudFlare WARP → 设置 → 偏好设置 → 账户 →复制密钥到脚本中"
  green "手机: 下载并安装 1.1.1.1 APP → 菜单 → 账户 → 复制密钥到脚本中"
  echo ""
  yellow "重要：请确保手机或电脑的 1.1.1.1 APP 的账户状态为WARP+！"
  echo ""
  read -rp "输入 WARP 账户许可证密钥 (26个字符): " warpkey
  until [[ $warpkey =~ ^[A-Z0-9a-z]{8}-[A-Z0-9a-z]{8}-[A-Z0-9a-z]{8}$ ]]; do
    red "WARP 账户许可证密钥格式输入错误，请重新输入！"
    read -rp "输入 WARP 账户许可证密钥 (26个字符): " warpkey
  done
  read -rp "请输入自定义设备名，如未输入则使用默认随机设备名: " device_name
  [[ -z $device_name ]] && device_name=$(date +%s%N | md5sum | cut -c 1-6)

  result_output=$(./warp-api)

  device_id=$(echo "$result_output" | awk -F ': ' '/device_id/{print $2}')
  private_key=$(echo "$result_output" | awk -F ': ' '/private_key/{print $2}')
  warp_token=$(echo "$result_output" | awk -F ': ' '/token/{print $2}')

  cat << EOF > warp.conf
[Account]
Device = $device_id
PrivateKey = $private_key
Token = $warp_token
Type = free
Name = WARP
MTU = 1280

[Peer]
PublicKey = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=
Endpoint = 162.159.192.8:0
Endpoint6 = [2606:4700:d0::a29f:c008]:0
# AllowedIPs = 0.0.0.0/0
# AllowedIPs = ::/0
KeepAlive = 30
EOF

  ./warp-go --update --config=./warp.conf --license=$warpkey --device-name=$device_name
elif [[ $account_type == 3 ]]; then
  yellow "请在此网站：https://web--public--warp-team-api--coia-mfs4.code.run/ 获取你的 WARP Teams 账户 TOKEN"
  read -rp "请输入 WARP Teams 账户的 TOKEN：" teams_token
  if [[ -n $teams_token ]]; then
    read -rp "请输入自定义设备名，如未输入则使用默认随机设备名: " device_name
    [[ -z $device_name ]] && device_name=$(date +%s%N | md5sum | cut -c 1-6)

    result_output=$(./warp-api)

    device_id=$(echo "$result_output" | awk -F ': ' '/device_id/{print $2}')
    private_key=$(echo "$result_output" | awk -F ': ' '/private_key/{print $2}')
    warp_token=$(echo "$result_output" | awk -F ': ' '/token/{print $2}')

    cat << EOF > warp.conf
[Account]
Device = $device_id
PrivateKey = $private_key
Token = $warp_token
Type = free
Name = WARP
MTU = 1280

[Peer]
PublicKey = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=
Endpoint = 162.159.192.8:0
Endpoint6 = [2606:4700:d0::a29f:c008]:0
# AllowedIPs = 0.0.0.0/0
# AllowedIPs = ::/0
KeepAlive = 30
EOF

    ./warp-go --update --config=warp.conf --team-config=$teams_token --device-name=$device_name

    sed -i "s/Type =.*/Type = team/g" warp.conf
  else
    red "未输入 WARP Teams 账户 TOKEN，脚本退出！"
    exit 1
  fi
else
  result_output=$(./warp-api)

  device_id=$(echo "$result_output" | awk -F ': ' '/device_id/{print $2}')
  private_key=$(echo "$result_output" | awk -F ': ' '/private_key/{print $2}')
  warp_token=$(echo "$result_output" | awk -F ': ' '/token/{print $2}')

  cat << EOF > warp.conf
[Account]
Device = $device_id
PrivateKey = $private_key
Token = $warp_token
Type = free
Name = WARP
MTU = 1280

[Peer]
PublicKey = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=
Endpoint = 162.159.192.8:0
Endpoint6 = [2606:4700:d0::a29f:c008]:0
# AllowedIPs = 0.0.0.0/0
# AllowedIPs = ::/0
KeepAlive = 30
EOF
fi

./warp-go --config=warp.conf --export-singbox=proxy.json

clear
green "WARP-GO 的 Sing-box 配置文件已生成成功！"
yellow "下面是 Sing-box 配置文件内容："
red "$(cat proxy.json)"
echo ""
yellow "请在本地使用此方法：https://blog.misaka.cyou/2023/03/12/cf-warp-yxip/ 优选可用的 Endpoint IP"