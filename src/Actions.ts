const SD = 'assets/sprites';

//Tuple stores the action frames and frame count.
type ActionInfo = [string, number];

//Type for tracking action's pre dialog, during dialog and post dialog animations
export type ActionTracker = {
    pre: ActionInfo | null,
    dialog: ActionInfo,
    post: ActionInfo | null
}


export enum PheonixActions {
    NORMAL = 1,
    CONFIDENT,
    CORNERED,
    DAMAGE,
    BREAKDOWN,
    HEADSHAKE,
    NOD,
    POINT,
    READ,
    SILLY,
    SIP,
    SLAM,
    THINKING
}

export enum JudgeActions {
    EYESCLOSED = 14,
    HEADSHAKE,
    NEGATIVE,
    POSITIVE,
    STAND,
    SURPRISED
}



//Dictionary to store all the actions Pheonix can take based on the ActionList Enum above.
//Store the action frames location and frame count for pre and post.
export const PheonixActionsDictionary:Record<PheonixActions, ActionTracker> = {
    [PheonixActions.NORMAL]: {
        pre: null,
        dialog: ['sprites/pheonix/normal/normal_talking/', 21],
        post: ['sprites/pheonix/normal/normal_stand/', 8] //Need to edit to add more time between blinks
    },
    [PheonixActions.CONFIDENT]: {
        pre: null,
        dialog: ['sprites/pheonix/confident/confident_talking/', 1],
        post: ['sprites/pheonix/confident/confident_stand/', 0]
    },
    [PheonixActions.CORNERED]: {
        pre: null,
        dialog: ['sprites/pheonix/cornered/cornered_talking2/', 7],
        post: ['sprites/pheonix/cornered/cornered_stand2/', 3]
    },
    [PheonixActions.DAMAGE]: {
        pre: ['sprites/pheonix/damage/damage2/', 13],
        dialog: ['sprites/pheonix/cornered/cornered_talking2/', 7],
        post: ['sprites/pheonix/cornered/cornered_stand2/', 3]
    },
    [PheonixActions.BREAKDOWN]: {
        pre: null,
        dialog: ['sprites/pheonix/breakdown/', 0],
        post: null
    },
    [PheonixActions.HEADSHAKE]: {
        pre: ['sprites/pheonix/headshake/headshake2/', 9],
        dialog: ['sprites/pheonix/normal/normal_talking/', 21],
        post: ['sprites/pheonix/normal/normal_stand/', 8]
    },
    [PheonixActions.NOD]: {
        pre: ['sprites/pheonix/nod/nod2/', 4],
        dialog: ['sprites/pheonix/normal/normal_talking/', 21],
        post: ['sprites/pheonix/normal/normal_stand/', 8]
    },
    [PheonixActions.POINT]: {
        pre: ['sprites/pheonix/point/point_motion2/', 3],
        dialog: ['sprites/pheonix/point/point_talking/', 3],
        post: ['sprites/pheonix/point/point_stand/', 0]
    },
    [PheonixActions.READ]: {
        pre: null,
        dialog: ['sprites/pheonix/read/read_talking2/', 3],
        post: ['sprites/pheonix/read/read_stand2/', 13]
    },
    [PheonixActions.SILLY]: {
        pre: null,
        dialog: ['sprites/pheonix/silly/silly_talking/', 3],
        post: ['sprites/pheonix/silly/silly_stand/', 0]
    },
    [PheonixActions.SIP]: {
        pre: ['sprites/pheonix/sip/sip_motion/', 7],
        dialog: ['sprites/pheonix/sip/sip_talking/', 1],
        post: ['sprites/pheonix/sip/sip_stand/', 0]
    },
    [PheonixActions.SLAM]: {
        pre: null,
        dialog: ['sprites/pheonix/slam/slam_talking/', 21],
        post: ['sprites/pheonix/slam/slam_stand/', 6]
    },
    [PheonixActions.THINKING]: {
        pre: null,
        dialog: ['sprites/pheonix/thinking/thinking_talking/', 21],
        post: ['sprites/pheonix/thinking/thinking_stand/', 26]
    }
}

export const JudgeActionsDictionary: Record<JudgeActions, ActionTracker> = {
    [JudgeActions.EYESCLOSED]: {
        pre: null,
        dialog: ['sprites/judge/eyesclosed/eyesclosed/', 0],
        post: null
    },
    [JudgeActions.HEADSHAKE]: {
        pre: null,
        dialog: ['sprites/judge/headshake/headshake/', 10],
        post: ['sprites/judge/headshake/headshake/', 10]
    },
    [JudgeActions.NEGATIVE]: {
        pre: ['sprites/judge/negative/negative_motion/', 10],
        dialog: ['sprites/judge/negative/negative_talking/', 17],
        post: ['sprites/judge/negative/negative_stand/', 12],
    },
    [JudgeActions.POSITIVE]: {
        pre: ['sprites/judge/positive/positive_motion/', 8],
        dialog: ['sprites/judge/stand/stand_talking/', 17],
        post: ['sprites/judge/stand/stand_stand/', 12]
    },
    [JudgeActions.STAND]: {
        pre: null,
        dialog: ['sprites/judge/stand/stand_talking/', 17],
        post: ['sprites/judge/stand/stand_stand/', 12]
    },
    [JudgeActions.SURPRISED]: {
        pre: null,
        dialog: ['sprites/judge/surprised/surprised_talking', 17],
        post: ['sprites/judge/surprised/surprised_stand', 16]
    },
}