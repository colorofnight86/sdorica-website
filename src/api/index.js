/* eslint-disable*/
// import axios from 'axios'
import { get, post } from './http'

// =======================> 万象物语 API
// 返回所有万象物语的角色
export const getAllCharacter = () => get(`character`)
// 返回指定名字的角色
export const getCharacterOfName = (name) => get(`character/name/detail?name=${name}`)
// 返回指定名字的角色
export const getCharacterOfId = (id) => get(`character/id/detail?id=${id}`)
// 返回指定内容的查找结果
export const getCharacterOfSearch = (from, keyword) => get(`search/detail?from=${from}&keyword=${keyword}`)
// 添加新的角色
export const addCharacter = (params) => post('character/add', params)
// 更新角色信息
export const updateCharacter = (params) => post( 'character/update', params)
// 返回筛选器的结果
export const getCharacterOfFilter = (have, position, number, type) => get(`filter/detail?have=${have}&position=${position}&number=${number}&type=${type}`)
