﻿const HUYA = require('./HUYA');
const _GUESS = require('./GUESS');
let GUESS = _GUESS.GUESS;
let QAGuessWatchLive = _GUESS.QAGuessWatchLive;
let MatchGuess = _GUESS.MatchGuess;
let ActWatchTor = _GUESS.ActWatchTor;
let ActTotalFinalPeak = _GUESS.ActTotalFinalPeak;
let ActLiveCall = _GUESS.ActLiveCall;
var TafMx = {};
TafMx['UriMapping'] = TafMx['UriMapping'] || {};
TafMx['WupMapping'] = TafMx['WupMapping'] || {};
TafMx['UriMapping'] = {
    1400: HUYA.MessageNotice,
    6110: HUYA.VipEnterBanner,
    6210: HUYA.VipBarListRsp,
    6501: HUYA.SendItemSubBroadcastPacket,
    6502: HUYA.SendItemNoticeWordBroadcastPacket,
    6507: HUYA.SendItemNoticeGameBroadcastPacket,
    8006: HUYA.AttendeeCountNotice
};
TafMx['WupMapping'] = {
    'getPropsList': HUYA.GetPropsListRsp,
    'OnUserHeartBeat': HUYA.UserHeartBeatRsp,
    'OnUserEvent': HUYA.UserEventRsp,
    'doLaunch': HUYA.LiveLaunchRsp,
    'getLivingInfo': HUYA.GetLivingInfoRsp,
    'getWebdbUserInfo': HUYA.GetWebdbUserInfoRsp,
    'batchGetCdnTokenInfo': HUYA.BatchGetCdnTokenRsp,
    'getCurWeekStarPropsIds': HUYA.WeekStarPropsIds,
    'sendCardPackageItem': HUYA.SendCardPackageItemRsp,
    'getVerificationStatus': HUYA.GetVerificationStatusResp,
    'getFirstRechargePkgStatus': HUYA.GetFirstRechargePkgStatusResp,
    'getPresenterDetail': HUYA.GetPresenterDetailRsp,
    'getCdnTokenInfoEx': HUYA.GetCdnTokenExRsp,
    'getSequence': HUYA.GetSequenceRsp,
    'getBatchPropsItem': HUYA.GetBatchPropsItemRsp,
    'getVipBarList': HUYA.VipBarListRsp,
    'getWeekRankList': HUYA.WeekRankListRsp,
    'muteRoomUser': HUYA.MuteRoomUserRsp,
    'sendMessage': HUYA.SendMessageRsp,
    'GetNobleInfo': HUYA.NobleInfoRsp,
    'queryBadgeInfoList': HUYA.BadgeInfoListRsp,
    'queryBadgeInfo': HUYA.BadgeInfo,
    'useBadge': HUYA.BadgeInfo,
    'getVipCard': HUYA.VipCardRsp,
    'getScreenSkin': HUYA.getScreenSkinRsp,
    'getRoomAuditConf': HUYA.GetRoomAuditConfRsp,
    'getUserLevelInfo': HUYA.GetUserLevelInfoRsp,
    'getViewerList': HUYA.ViewerListRsp,
    'getFansSupportList': HUYA.FansSupportListRsp,
    'sendReplayMessage': HUYA.SendReplayMessageRsp,
    'getPresenterActivity': HUYA.PresenterActivityRsp,
    'getRMessageList': HUYA.GetRMessageListRsp,
    'getRMessageListWb': HUYA.GetRMessageListRsp,
    'getDirectorProgramList': HUYA.GetDirectorProgramListRsp,
    'reportMessage': HUYA.ReportMessageRsp,
    'getUserBoxInfo': HUYA.GetUserBoxInfoRsp,
    'finishTaskNotice': HUYA.FinishTaskNoticeRsp,
    'awardBoxPrize': HUYA.AwardBoxPrizeRsp,
    'getTreasureBoxInfo': HUYA.GetTreasureBoxInfoRsp,
    'bet': HUYA.BetRsp,
    'buyBet': HUYA.BuyBetRsp,
    'getGameInfo': HUYA.GetGameInfoListRsp,
    'getRemainBeanNum': HUYA.GetRemainBeanNumRsp,
    'getAssistant': HUYA.GetAssistantRsp,
    'queryCardPackage': HUYA.QueryCardPackageRsp,
    'queryTreasure': HUYA.QueryTreasureInfoRsp,
    'sendTreasureLotteryDraw': HUYA.TreasureLotteryDrawRsp,
    'getLinkMicPresenterListByUid': HUYA.GetLinkMicPresenterInfoRsp,
    'subscribe': HUYA.SubscribeResp,
    'unsubscribe': HUYA.UnsubscribeResp,
    'getSubscribeStatus': HUYA.SubscribeStatusResp,
    'getRelation': HUYA.GetRelationRsp,
    'addSubscribe': HUYA.ModRelationRsp,
    'delSubscribe': HUYA.ModRelationRsp,
    'getRelationBatch': HUYA.GetRelationBatchRsp,
    'isPugcRoom': HUYA.IsPugcRoomRsp,
    'getPugcVipList': HUYA.GetPugcVipListRsp,
    'getGameLiveHisUpon': HUYA.GetGameLiveHisUponRsp,
    'getVideoHisUpon': HUYA.GetGameLiveHisUponRsp,
    'getBadgeName': HUYA.BadgeNameRsp,
    'getBadgeNameV2': HUYA.BadgeNameRsp,
    'getLiveAdInfo': HUYA.GetLiveAdInfoRsp,
    'getAuditorRole': HUYA.AuditorEnterLiveNotice,
    'getBadgeConfigInfo': HUYA.BadgeConfigInfoRsp,
    'setBadgeV': HUYA.SetBadgeVRsp,
    'setUserProfile': HUYA.SetUserProfileRsp,
    'getMaiXuBySid': HUYA.MaiXuSearchRsp,
    'getOnTVPanel': HUYA.OnTVPanel,
    'getOnTVUserInfo': HUYA.OnTVUserInfoRsp,
    'sendOnTVBarrage': HUYA.SendOnTVBarrageRsp,
    'getBadgeItem': HUYA.BadgeItemRsp,
    'getCurrentGameAd': HUYA.GameAdvertisement,
    'getSupportCampInfo': HUYA.SupportCampInfoRsp,
    'getUserSupportCamp': HUYA.UserSupportCampRsp,
    'getUserSetting': HUYA.SettingFetchRsp,
    'getLotteryPanel': HUYA.LotteryPanel,
    'getLotteryUserInfo': HUYA.LotteryUserInfoRsp,
    'buyTicket': HUYA.BuyTicketRsp,
    'getPresenterLevelBase': HUYA.PresenterLevelBaseRsp,
    'getPresenterLevelProgress': HUYA.PresenterLevelProgressRsp,
    'getPresenterLiveScheduleInfo': HUYA.GetPresenterLiveScheduleInfoRsp,
    'getActivityMsg': HUYA.ActivityMsgRsp,
    'GetCurCheckRoomStatus': HUYA.CheckRoomStatus,
    'CKRoomUserEnter': HUYA.CheckRoomRsp,
    'getFansPrivilege': HUYA.FansPrivilegeRsp,
    'queryBadgeInfoV2': HUYA.BadgeInfo,
    'useBadgeV2': HUYA.BadgeInfo,
    'getDragonInfo': GUESS.GetDragonRsp,
    'getActivityTorMsg': HUYA.ActivityTorMsgRsp,
    'getTorMemberTaskResult': ActWatchTor.MemberTaskResultRsp,
    'startTorPublishTask': ActWatchTor.PublishTaskRsp,
    'getTorPublishPanel': ActWatchTor.PublishPanelRsp,
    'queryTorWeekHistory': ActWatchTor.PublishHistoryRsp,
    'GetBattleTeamInfo': ActLiveCall.GetBattleTeamInfoRsp,
    'getMeetingStatByPresenterUid': HUYA.GetMeetingStatByUidRsp,
    'getUserPanel': QAGuessWatchLive.QAGuessGetUserPanelRsp,
    'getRctTimedMessage': HUYA.GetRctTimedMessageRsp,

    getInfoFromVG: HUYA.GetInfoFromVGRsp,
    GetInfoFromVG: HUYA.GetInfoFromVGRsp,
    getInfoFromCdnVG: HUYA.GetInfoFromVGRsp,
    getCdnTokenInfoEx: HUYA.GetCdnTokenExRsp,
    getLivingStreamInfo: HUYA.GetLivingStreamInfoRsp,
    getP2PStreamInfo: HUYA.GetP2PStreamInfoRsp,
    getP2PStreamTokenInfoEx: HUYA.GetP2PStreamTokenExRsp,
    queryHttpDns: HUYA.QueryHttpDnsRsp,
    loginVerify: HUYA.LoginVerifyRsp,
    joinGroup: HUYA.JoinMediaGroupRsp,
    quitGroup: HUYA.QuitMediaGroupRsp,
    wsTimeSync: HUYA.WSTimeSyncRsp,
    onClientGetStunAndPcdnProxyReq: HUYA.ClientGetStunAndPcdnProxyRsp,
    clientQueryPcdnSchedule: HUYA.ClientQueryPcdnScheduleRsp,
    onClientGetPcdnFlvOutsideSdkFullstreamInfo: HUYA.ClientGetPcdnFlvOutsideSdkFullstreamInfoRsp,
    getMediaRec: HUYA.RecSysRsp
};
module['exports'] = TafMx;