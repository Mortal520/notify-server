/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

import dayjs, { weekToday } from '../../../utils/dayjs'
import { getConfig } from '../../../utils/getConfig'

export const textTemplate = (data: TextTemplateProps) => {
  const { caiHongpi, sayLove, songLyrics, oneMagazines, netEaseCloud, oneWord, dayEnglish } = data

  let text = '早安呀，我可爱的宝宝~\n'

  // 工作日/休息日，需要排除节假日
  const week = weekToday()
  console.log(week)
  if (['星期六', '星期日'].includes(week)) {
    text += `
    如果我的宝宝还没起床呀！崽崽就等着宝宝起床给我说早安呦🤣
嗯哼~，既然今天是${week}，就让你再睡会懒觉~下次可不能啦~😝\n`
  }
  else {
    text += `如果我的宝宝已经起床啦！崽崽向你说早安呦~，记得吃早饭呀😆\n
嗯哼哼~今天可是${week}哦，上班别迟到了哦~`
  }

  // 添加笑话
  if (caiHongpi) {
    //     text += `
    // 彩虹屁：
    text += `
${caiHongpi.content}\n`
  }

  if (sayLove) {
    text += `
${sayLove.content}\n`
  }

  // 诗句
  if (songLyrics) {
    text += `
『${songLyrics.source}』${songLyrics.content}\n`
  }

  if (oneMagazines) {
    text += `
『ONE杂志』${oneMagazines.word}\n`
  }

  if (netEaseCloud) {
    text += `
『网易云音乐热评』${netEaseCloud.content}——${netEaseCloud.source}\n`
  }

  // 添加一句一言
  if (oneWord) {
    text += `
『一言』${oneWord.hitokoto}\n`
  }

  // 每日英语
  if (dayEnglish) {
    text += `
『每日英语（${dayjs(dayEnglish.date).format('ll')}』${dayEnglish.content}`
  }

  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
